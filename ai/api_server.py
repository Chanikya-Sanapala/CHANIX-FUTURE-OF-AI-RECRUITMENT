from fastapi import FastAPI, File, UploadFile, Form, Request
from fastapi.responses import JSONResponse
import uvicorn
import shutil
import os
from resume_matchmaker2 import analyze, read_file, extract_email, send_gmail_email, load_env_vars, suggestions
try:
    from interview import recorder, create_interview, get_answer
except ImportError:
    recorder = None
    create_interview = None
    get_answer = None

app = FastAPI()

# Global state for interview (legacy support)
interview_state = {
    "questions": [],
    "tts_files": [],
    "current_q": 0
}

@app.get("/health")
async def health():
    return {"status": "ok", "service": "Smart Engine AI"}

@app.post("/api/match")
async def match_resume(
    jd: UploadFile = File(...),
    resume: UploadFile = File(...),
    topk: int = Form(35),
    fuzzy: int = Form(85)
):
    temp_dir = "temp"
    os.makedirs(temp_dir, exist_ok=True)
    jd_path = os.path.join(temp_dir, jd.filename.replace(" ", "_"))
    resume_path = os.path.join(temp_dir, resume.filename.replace(" ", "_"))

    with open(jd_path, "wb") as f:
        shutil.copyfileobj(jd.file, f)
    with open(resume_path, "wb") as f:
        shutil.copyfileobj(resume.file, f)

    jd_text = read_file(jd_path)
    resume_text = read_file(resume_path)
    result = analyze(jd_text, resume_text, topk, fuzzy)

    try:
        env_vars = load_env_vars()
        candidate_email = extract_email(resume_text)
        if candidate_email:
            send_gmail_email(candidate_email, f"Match Score: {result['score']}%", suggestions(result), env_vars=env_vars)
    except Exception as e:
        print(f"Email error: {e}")

    os.remove(jd_path)
    os.remove(resume_path)
    return JSONResponse(result)

# --- Interview Routes (Consolidated from app.py) ---
@app.post("/generate")
async def gen(request: Request):
    if not create_interview:
        return {"ok": False, "msg": "Interview module not loaded"}
    data = await request.json()
    jd = data["job"]
    lang = data.get("lang")
    qs, tts = create_interview(jd, lang)
    interview_state["questions"] = qs
    interview_state["tts_files"] = tts
    interview_state["current_q"] = 0
    return {"ok": True, "questions": qs, "tts": tts}

@app.get("/start_recording")
async def start_rec():
    if recorder: recorder.start()
    return {"ok": True}

@app.get("/stop_recording")
async def stop_rec():
    files = recorder.stop() if recorder else {}
    return {"ok": True, "files": files}

@app.get("/next_question")
async def next_q():
    idx = interview_state["current_q"]
    if idx >= len(interview_state["questions"]):
        return {"ok": False, "msg": "no more questions"}
    res = {
        "question": interview_state["questions"][idx]["text"],
        "tts": interview_state["tts_files"][idx]
    }
    interview_state["current_q"] += 1
    return res

@app.get("/answer")
async def ans():
    return {"answer": get_answer() if get_answer else "Feature not available"}

if __name__ == "__main__":
    uvicorn.run("api_server:app", host="0.0.0.0", port=int(os.environ.get("PORT", 8000)), reload=False)
