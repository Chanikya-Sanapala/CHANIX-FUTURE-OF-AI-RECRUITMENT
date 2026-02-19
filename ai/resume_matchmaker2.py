#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Resume ↔ JD Matcher (focused JD, top-K terms, fuzzy matching)
Usage:
  python resume_matchmaker2.py JD.pdf Resume.docx
  python resume_matchmaker2.py --interactive
  # tuning:
  python resume_matchmaker2.py JD.pdf Resume.docx --topk 35 --fuzzy 82
"""

import sys, argparse, re, io, os
import datetime as dt

# Force UTF-8 for Windows console output to prevent UnicodeEncodeError with emojis
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')
from typing import Set, Tuple, List, Dict

from booking import make_ics  # ensure booking.py is in the same folder

# ---- optional deps (graceful fallbacks) ----
try:
    import spacy
    _NLP = spacy.load("en_core_web_sm")
except Exception:
    _NLP = None

try:
    import pdfplumber
except Exception:
    pdfplumber = None

try:
    from docx import Document
except Exception:
    Document = None

from rapidfuzz import fuzz, process
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# ---- Email Logic (Gmail) ----
def load_env_vars():
    """
    Loads .env file from ../backend/.env
    """
    env_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'backend', '.env')
    d = {}
    if os.path.exists(env_path):
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                if line.strip() and not line.startswith("#"):
                    parts = line.strip().split("=", 1)
                    if len(parts) == 2:
                        d[parts[0].strip()] = parts[1].strip()
    return d

def extract_email(text: str) -> str:
    """
    Simple regex to find the first email address in the text.
    """
    match = re.search(r'[\w\.-]+@[\w\.-]+\.\w+', text)
    return match.group(0) if match else None

def send_gmail_email(to_email, subject, body, attachment_path=None, env_vars=None):
    import smtplib
    from email.mime.text import MIMEText
    from email.mime.multipart import MIMEMultipart
    from email.mime.base import MIMEBase
    from email import encoders

    if not env_vars:
        print("⚠️  No environment variables provided for email.")
        return

    sender_email = env_vars.get("EMAIL_USER")
    sender_password = env_vars.get("EMAIL_PASS")
    host = env_vars.get("HOST", "smtp.gmail.com")
    port = int(env_vars.get("PORT_EMAIL", 587))

    if not sender_email or not sender_password:
        print("⚠️  Missing email credentials in .env")
        return

    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = to_email
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    if attachment_path and os.path.isfile(attachment_path):
        try:
            with open(attachment_path, "rb") as attachment:
                part = MIMEBase("application", "octet-stream")
                part.set_payload(attachment.read())
            encoders.encode_base64(part)
            part.add_header(
                "Content-Disposition",
                f"attachment; filename= {os.path.basename(attachment_path)}",
            )
            msg.attach(part)
        except Exception as e:
            print(f"⚠️  Could not attach file: {e}")

    try:
        server = smtplib.SMTP(host, port)
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, to_email, msg.as_string())
        server.quit()
        print(f"📧 Gmail sent successfully to {to_email}")
    except Exception as e:
        print(f"❌ Failed to send Gmail: {e}")


# ---------------- File readers ----------------
def read_txt(path: str) -> str:
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        return f.read()

def read_pdf(path: str) -> str:
    if pdfplumber is None:
        raise RuntimeError("pip install pdfplumber")
    text = ""
    with pdfplumber.open(path) as pdf:
        for p in pdf.pages:
            text += (p.extract_text() or "") + "\n"
    return text

def read_docx(path: str) -> str:
    if Document is None:
        raise RuntimeError("pip install python-docx")
    doc = Document(path)
    return "\n".join(p.text for p in doc.paragraphs)

def read_file(path: str) -> str:
    p = path.lower()
    if p.endswith(".txt"):
        return read_txt(path)
    if p.endswith(".pdf"):
        return read_pdf(path)
    if p.endswith(".docx"):
        return read_docx(path)
    raise ValueError("Unsupported file type. Use .txt, .pdf, or .docx")

# ---------------- Util / NLP helpers ----------------
WORD = re.compile(r"[a-zA-Z][a-zA-Z0-9\+\#\./-]{1,}")
STOP = set("""
a an the and or for to of in on with by from at as is are be this that those these
you your we our they their i me my he she it its was were will would can could should
into about over under within without than then so such not no yes per via etc
responsibilities responsibility requirements requirement qualifications ability excellent strong good
ideally preferred preference bonus nice plus great fast-paced team-player detail-oriented self-starter
""".split())

LOC_JUNK = re.compile(r"\b(usa|uk|india|remote|hybrid|onsite|nyc|ga|nc|tx|ca|charlotte|alpharetta|bangalore|pune|delhi|gurgaon|hyd|mumbai)\b", re.I)
GENERIC_JUNK = re.compile(r"\b(timely manner|business need[s]?|latest advancement[s]?|work environment|cross[- ]functional team[s]?)\b", re.I)

TECH_TOKEN = re.compile(r"""
    (?:
        (?:c\+\+)|(?:c\#)|(?:\.net)|(?:ci/cd)|(?:ci cd)|(?:continuous integration)|(?:continuous delivery)|
        (?:node\.?js)|(?:react\.?js)|(?:next\.?js)|(?:vue\.?js)|
        (?:java)|(?:spring)|(?:hibernate)|(?:kafka)|
        (?:aws)|(?:gcp)|(?:azure)|
        (?:sql)|(?:mysql)|(?:postgres|postgresql)|(?:oracle)|
        (?:graphql)|(?:rest)|(?:soap)|
        (?:html5)|(?:css3)|(?:sass)|(?:less)|
        (?:docker)|(?:kubernetes)|(?:k8s)|(?:terraform)|
        (?:pandas)|(?:numpy)|(?:scikit-learn)|(?:pytorch)|(?:tensorflow)|
        (?:airflow)|(?:spark)|(?:hadoop)|
        (?:jira)|(?:git)|(?:jenkins)|(?:maven)|(?:gradle)|(?:intellij|eclipse|netbeans)
    )
""", re.I | re.VERBOSE)

def normalize(s: str) -> str:
    s = s.strip().lower()
    s = s.replace("–","-").replace("—","-").replace("_"," ")
    s = re.sub(r"\s+"," ", s)
    return s

def lemmatize_tokens(text: str) -> List[str]:
    if not _NLP:  # fallback
        return [t for t in WORD.findall(text.lower()) if len(t) > 1 and t not in STOP]
    doc = _NLP(text.lower())
    toks = []
    for t in doc:
        if t.is_space or t.is_punct or t.is_stop:
            continue
        w = t.lemma_.strip().lower()
        if len(w) > 1 and WORD.match(w) and w not in STOP:
            toks.append(w)
    return toks

def ngrams(tokens: List[str], n:int) -> List[str]:
    return [" ".join(tokens[i:i+n]) for i in range(len(tokens)-n+1)]

def chunk_phrases(text: str) -> Set[str]:
    toks = lemmatize_tokens(text)
    phrases = set()
    for n in (1,2,3):
        for g in ngrams(toks, n):
            phrases.add(g)
    return phrases

def extract_tech_tokens(text: str) -> Set[str]:
    out = set()
    for m in TECH_TOKEN.finditer(text):
        out.add(normalize(m.group(0)))
    if "ci/cd" in out or "ci cd" in out:
        out.update(["continuous integration", "continuous delivery"])
    if "postgres" in out:
        out.add("postgresql")
    return out

def spacy_chunks_entities(text: str) -> Set[str]:
    if not _NLP:
        return set()
    doc = _NLP(text)
    out = set()
    for ch in doc.noun_chunks:
        if 1 <= len(ch.text.split()) <= 3:
            out.add(normalize(ch.text))
    for ent in doc.ents:
        if ent.label_ in {"ORG", "PRODUCT", "LANGUAGE"}:
            out.add(normalize(ent.text))
    return out

def extract_skills_general(text: str) -> Set[str]:
    skills = set()
    skills |= extract_tech_tokens(text)
    skills |= chunk_phrases(text)
    skills |= spacy_chunks_entities(text)
    cleaned = set()
    for s in skills:
        if not s or s in STOP:
            continue
        if LOC_JUNK.search(s) or GENERIC_JUNK.search(s):
            continue
        cleaned.add(s)
    return cleaned

# --------- JD section parsing & top-K selection ----------
SECTION_HINTS = re.compile(r"\b(requirements?|must[- ]have|qualifications?|what you(?:'|’)ll do|responsibilit(?:y|ies))\b", re.I)
BULLET = re.compile(r"^\s*([\-•\*\u2022]|(\d+\.))\s+", re.U)

def split_lines(text: str) -> List[str]:
    return [l.strip() for l in text.splitlines() if l.strip()]

def prefer_requirement_lines(jd_text: str) -> Tuple[List[str], List[str]]:
    lines = split_lines(jd_text)
    req_lines, other_lines = [], []
    in_req = False
    for ln in lines:
        if SECTION_HINTS.search(ln):
            in_req = True
        if in_req and not ln:
            in_req = False
        if in_req and (BULLET.search(ln) or len(ln.split()) <= 12 or "must" in ln.lower() or "required" in ln.lower()):
            req_lines.append(ln)
        else:
            other_lines.append(ln)
    return req_lines, other_lines

def extract_jd_terms(jd_text: str, topk: int = 35) -> Tuple[Set[str], Set[str]]:
    req_lines, _ = prefer_requirement_lines(jd_text)
    text_req = "\n".join(req_lines) if req_lines else jd_text

    cand = extract_skills_general(text_req)

    must = set()
    for ln in req_lines:
        if re.search(r"\b(must|required|at least)\b", ln, re.I):
            must |= extract_skills_general(ln)

    if cand:
        vec = TfidfVectorizer(stop_words="english", ngram_range=(1,2))
        X = vec.fit_transform([jd_text])
        vocab = vec.vocabulary_
        scored = []
        for term in cand:
            if term in vocab:
                idx = vocab[term]
                scored.append((term, float(X[0, idx])))
            else:
                base = 0.05 if TECH_TOKEN.search(term) else 0.0
                scored.append((term, base))
        scored.sort(key=lambda x: x[1], reverse=True)
        keep = [t for t, _ in scored[:topk]]
        jd_terms = set(keep)
    else:
        jd_terms = set(list(extract_skills_general(jd_text))[:topk])

    jd_terms |= (must - STOP)

    drop_generic = {"experience","developer","development","environment","application","team","business","issue","role","solution","tool","management"}
    jd_terms = {t for t in jd_terms if t not in drop_generic}

    return jd_terms, (must & jd_terms)

# ---------------- Fuzzy & similarity ----------------
def fuzzy_match_sets(source: Set[str], target: Set[str], threshold: int = 85) -> Tuple[Set[str], Dict[str, str]]:
    matched, mapping = set(), {}
    if not source or not target:
        return matched, mapping
    target_list = list(target)
    for term in source:
        best, score, _ = process.extractOne(term, target_list, scorer=fuzz.token_set_ratio)
        if best and score >= threshold:
            matched.add(term)
            mapping[term] = best
    return matched, mapping

def compute_tfidf_sim(a: str, b: str) -> float:
    v = TfidfVectorizer(stop_words="english", ngram_range=(1,2))
    X = v.fit_transform([a, b])
    return float(cosine_similarity(X[0:1], X[1:2])[0][0])

# ---------------- Core analysis ----------------
def analyze(jd_text: str, resume_text: str, topk: int = 35, fuzzy_threshold: int = 85):
    jd_text = (jd_text or "").strip()
    resume_text = (resume_text or "").strip()
    if not jd_text or not resume_text:
        raise ValueError("Both JD and Resume text are required.")

    jd_terms, must_terms = extract_jd_terms(jd_text, topk=topk)
    cv_terms = extract_skills_general(resume_text)

    exact = jd_terms & cv_terms
    fuzz_set, mapping = fuzzy_match_sets(jd_terms - exact, cv_terms, threshold=fuzzy_threshold)
    matched = exact | fuzz_set
    missing = jd_terms - matched

    coverage = (len(matched) / len(jd_terms)) if jd_terms else 0.0
    exact_ratio = (len(exact) / len(jd_terms)) if jd_terms else 0.0
    tfidf = compute_tfidf_sim(jd_text, resume_text)

    must_matched = len((must_terms or set()) & matched)
    must_bonus = min(0.1, 0.02 * must_matched)

    final = 0.7 * coverage + 0.2 * tfidf + 0.1 * exact_ratio + must_bonus
    final_pct = round(100 * final, 1)

    pairs = []
    for t in sorted(exact):
        pairs.append((t, t))
    for t in sorted(fuzz_set):
        pairs.append((t, mapping.get(t, t)))

    return {
        "score": final_pct,
        "coverage": round(coverage, 3),
        "tfidf": round(tfidf, 3),
        "exact_overlap": round(exact_ratio, 3),
        "jd_term_count": len(jd_terms),
        "resume_term_count": len(cv_terms),
        "must_terms": sorted(must_terms or []),
        "matched_pairs": pairs,
        "missing": sorted(missing),
    }

def suggestions(result: dict) -> List[str]:
    tips = []
    miss = result.get("missing", [])
    if miss:
        tips.append("Add/highlight if applicable: " + ", ".join(miss[:12]) + ("..." if len(miss) > 12 else ""))
    if result.get("must_terms"):
        tips.append("Ensure must-have items are explicitly shown: " + ", ".join(result["must_terms"]))
    tips += [
        "Mirror key JD terms in summary and top bullets.",
        "Use action verbs (designed, implemented, optimized, deployed).",
        "Quantify outcomes (%, time saved, cost reduced, throughput)."
    ]
    return tips

# ---------------- CLI ----------------
def main():
    ap = argparse.ArgumentParser(description="Resume ↔ JD matcher (focused JD + topK + fuzzy)")
    ap.add_argument("jd", nargs="?", help="JD file (.txt/.pdf/.docx)")
    ap.add_argument("resume", nargs="?", help="Resume file (.txt/.pdf/.docx)")
    ap.add_argument("--interactive","-i", action="store_true", help="Paste JD and Resume text interactively")
    ap.add_argument("--topk", type=int, default=35, help="JD top-K terms to consider (default 35)")
    ap.add_argument("--fuzzy", type=int, default=85, help="Fuzzy threshold 0–100 (default 85)")
    ap.add_argument("--email", type=str, help="Candidate email address for notifications")
    args = ap.parse_args()

    if args.interactive:
        print("Paste JD text. End with a blank line:")
        jd_lines = []
        while True:
            line = sys.stdin.readline()
            if line is None or line.strip() == "":
                break
            jd_lines.append(line.rstrip("\n"))
        jd_text = "\n".join(jd_lines)

        print("\nPaste Resume text. End with a blank line:")
        cv_lines = []
        while True:
            line = sys.stdin.readline()
            if not line or line.strip() == "":
                break
            cv_lines.append(line.rstrip("\n"))
        resume_text = "\n".join(cv_lines)
    else:
        if not args.jd or not args.resume:
            print("Usage:\n  python resume_matchmaker2.py JD_FILE RESUME_FILE\n  python resume_matchmaker2.py --interactive")
            sys.exit(1)
        jd_text = read_file(args.jd)
        resume_text = read_file(args.resume)

    if len(jd_text.strip()) < 40:
        print("⚠️  JD text seems very short (scanned PDF?).")
    if len(resume_text.strip()) < 40:
        print("⚠️  Resume text seems very short (scanned PDF?).")

    result = analyze(jd_text, resume_text, topk=args.topk, fuzzy_threshold=args.fuzzy)

    print("="*80)
    print(f"📊 Match Score: {result['score']}%  "
          f"(Coverage: {result['coverage']}, TF-IDF: {result['tfidf']}, Exact: {result['exact_overlap']})")
    print(f"JD terms considered: {result['jd_term_count']} | Resume terms: {result['resume_term_count']}")
    if result.get("must_terms"):
        print(f"Must-have terms kept: {', '.join(result['must_terms'])}")
    print("="*80)

    print("\n✅ Matched (JD → Resume):")
    if result["matched_pairs"]:
        for jd_term, cv_term in result["matched_pairs"]:
            print(f"  • {jd_term}" + ("" if jd_term == cv_term else f"  ≈  {cv_term}"))
    else:
        print("  —")

    print("\n❌ Missing (from JD focus set):")
    print("  " + ", ".join(result["missing"]) if result["missing"] else "  —")

    print("\n💡 Suggestions:")
    for i, tip in enumerate(suggestions(result), 1):
        print(f"{i}. {tip}")

    # --- Email Notification Logic ---
    env_vars = load_env_vars()
    resume_email = extract_email(resume_text)
    
    # Priority: 1. CLI --email (from backend), 2. Resume extraction, 3. Testing fallback
    recipient_email = args.email if args.email else resume_email

    if not recipient_email and "EMAIL_USER" in env_vars:
         # Fallback for testing if resume has no email
         recipient_email = env_vars["EMAIL_USER"]
         print(f"⚠️  No email found in resume. Sending to self ({recipient_email}) for testing.")

    THRESHOLD = 65.0
    candidate_name = os.path.splitext(os.path.basename(args.resume))[0] if args.resume else "Candidate"
    
    # EMAIL DISABLED IN PYTHON - HANDLED BY NODE.JS BACKEND TO ENSURE CORRECT LINKS
    # if recipient_email:
    #     if result["score"] >= THRESHOLD:
    #         # ... (Legacy Google Meet Link Logic Removed) ...
    #         pass 
    #     else:
    #         pass
    print(f"📊 Analysis Complete. Score: {result['score']}%")

if __name__ == "__main__":
    main()
