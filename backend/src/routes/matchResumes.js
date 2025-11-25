// import express from "express";
// import cors from "cors";
// import matchResumeRoutes from "./routes/matchResume.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// main code
import express from "express";
import multer from "multer";
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use environment variables or fallback defaults
const PYTHON_EXEC = process.env.PYTHON_EXEC || "python"; // python or python3
const PYTHON_SCRIPT = process.env.PYTHON_SCRIPT || path.join(__dirname, "../ai/resume_matchmaker2.py");

router.post("/", upload.fields([
  { name: "jd", maxCount: 1 },
  { name: "resume", maxCount: 1 }
]), (req, res) => {
  const jdPath = req.files.jd[0].path;
  const resumePath = req.files.resume[0].path;

  const python = spawn(PYTHON_EXEC, [PYTHON_SCRIPT, jdPath, resumePath]);

  let output = "";
  let error = "";

  python.stdout.on("data", (data) => { output += data.toString(); });
  python.stderr.on("data", (data) => { error += data.toString(); });

  python.on("close", (code) => {
    if (code === 0) {
      try {
        const result = JSON.parse(output); // parse JSON from Python
        res.status(200).json({ success: true, result });
      } catch (err) {
        res.status(500).json({ success: false, error: "Invalid JSON from Python" });
      }
    } else {
      res.status(500).json({ success: false, error });
    }
  });
});

export default router;



// // Use the separate route
// app.use("/match-resume", matchResumeRoutes);

// app.listen(5000, () => console.log("Server running on port 5000"));

// import express from "express";
// import multer from "multer";
// import { spawn } from "child_process";

// const router = express.Router();
// const upload = multer({ dest: "uploads/" });

// router.post("/", upload.fields([
//   { name: "jd", maxCount: 1 },
//   { name: "resume", maxCount: 1 }
// ]), (req, res) => {
//   const jdPath = req.files.jd[0].path;
//   const resumePath = req.files.resume[0].path;

//   const python = spawn(
//     "C:\\Users\\Administrator\\AppData\\Local\\Python\\pythoncore-3.14-64\\python.exe",
//     [
//       "C:\\Users\\Administrator\\Desktop\\Smart-Engine\\ai\\resume_matchmaker2.py",
//       jdPath,
//       resumePath
//     ]
//   );

//   let output = "";
//   let error = "";

//   python.stdout.on("data", (data) => { output += data.toString(); });
//   python.stderr.on("data", (data) => { error += data.toString(); });

//   python.on("close", (code) => {
//     if (code === 0) {
//       res.send({ success: true, result: output });
//     } else {
//       res.send({ success: false, error });
//     }
//   });
// });

// export default router;




// import json

// # Example: replace the final print/output section with this
// output = {
//     "match_score": 97.9,  # Replace with your actual calculated score
//     "coverage": 1.0,      # Optional: coverage
//     "tfidf": 0.397,       # Optional: TF-IDF score
//     "exact": 1.0,         # Optional: exact match score
//     "jd_terms_count": 39,
//     "resume_terms_count": 4350,
//     "must_have_terms": [
//         "experience java",
//         "experience java development",
//         "java",
//         "java development",
//         "least",
//         "least years",
//         "least years experience",
//         "years",
//         "years experience",
//         "years experience java"
//     ],
//     "matched_terms": [
//         "advancements java technology",
//         "databases mysql oracle",
//         "develop",
//         "experience java",
//         "experience java development",
//         "experience working",
//         "experience working java",
//         "familiarity",
//         "frameworks",
//         "high-quality java",
//         "java",
//         "java development",
//         "java development experience",
//         "java frameworks",
//         "java frameworks tools",
//         "java knowledge",
//         "java knowledge oop",
//         "java programming language",
//         "knowledge",
//         "knowledge databases mysql",
//         "knowledge java frameworks",
//         "least",
//         "least years",
//         "least years experience",
//         "maintain high-quality java",
//         "mysql oracle sql",
//         "oracle sql server",
//         "programming",
//         "programming skills java",
//         "skills",
//         "software",
//         "software proficiency java",
//         "spring hibernate struts",
//         "sql server overall",
//         "tools",
//         "working",
//         "years",
//         "years experience",
//         "years experience java"
//     ],
//     "missing_terms": [],  # Any missing terms from JD
//     "suggestions": [
//         "Ensure must-have items are explicitly shown: experience java, experience java development, java, java development, least, least years, least years experience, years, years experience, years experience java",
//         "Mirror key JD terms in summary and top bullets.",
//         "Use action verbs (designed, implemented, optimized, deployed).",
//         "Quantify outcomes (%, time saved, cost reduced, throughput)."
//     ]
// }

// # Print JSON (stdout), which Node.js will capture
// print(json.dumps(output))


// updated nodejs backend

// python.on("close", (code) => {
//   if (code === 0) {
//     try {
//       const data = JSON.parse(output);  // Parse JSON from Python
//       res.send({ success: true, result: data });
//     } catch (err) {
//       res.send({ success: false, error: "Invalid JSON from Python" });
//     }
//   } else {
//     res.send({ success: false, error });
//   }
// });


// updated react frontend
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const formData = new FormData();
//   formData.append("jd", jd);
//   formData.append("resume", resume);

//   try {
//     const response = await axios.post(
//       "http://localhost:5000/match-resume",
//       formData,
//       { headers: { "Content-Type": "multipart/form-data" } }
//     );

//     if (response.data.success) {
//       const data = response.data.result;

//       // Example: render match score and matched terms
//       setResult(
//         `Match Score: ${data.match_score}\n` +
//         `Matched Terms: ${data.matched_terms.join(", ")}\n` +
//         `Missing Terms: ${data.missing_terms.join(", ")}\n` +
//         `Suggestions: ${data.suggestions.join("\n- ")}`
//       );
//     } else {
//       setResult("Error: " + response.data.error);
//     }
//   } catch (err) {
//     setResult("Error: " + err.message);
//   }
// };


