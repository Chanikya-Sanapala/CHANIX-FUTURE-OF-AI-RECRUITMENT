// controllers/resumeController.js
import multer from "multer";
import { spawn } from "child_process";

const upload = multer({ dest: "uploads/" });

export const matchResume = [
  upload.fields([
    { name: "jd", maxCount: 1 },
    { name: "resume", maxCount: 1 }
  ]),
  (req, res) => {
    const jdPath = req.files.jd[0].path;
    const resumePath = req.files.resume[0].path;

    const python = spawn(
      "C:\\Users\\Administrator\\AppData\\Local\\Python\\pythoncore-3.14-64\\python.exe",
      [
        "C:\\Users\\Administrator\\Desktop\\Smart-Engine\\ai\\resume_matchmaker2.py",
        jdPath,
        resumePath
      ]
    );

    let output = "";
    let error = "";

    python.stdout.on("data", (data) => { output += data.toString(); });
    python.stderr.on("data", (data) => { error += data.toString(); });

    python.on("close", (code) => {
      if (code === 0) {
        try {
          const data = JSON.parse(output);
          res.status(200).json({ success: true, result: data });
        } catch (err) {
          res.status(500).json({ success: false, error: "Invalid JSON from Python" });
        }
      } else {
        res.status(500).json({ success: false, error });
      }
    });
  }
];
