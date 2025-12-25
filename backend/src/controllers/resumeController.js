// controllers/resumeController.js
import multer from "multer";
import { spawn } from "child_process";

const upload = multer({ dest: "uploads/" });

import path from 'path';

export const matchResume = [
  upload.fields([
    { name: "jd", maxCount: 1 },
    { name: "resume", maxCount: 1 }
  ]),
  (req, res) => {
    const jdPath = req.files.jd[0].path;
    const resumePath = req.files.resume[0].path;

    const scriptPath = path.join(process.cwd(), '..', 'ai', 'resume_matchmaker2.py');

    const python = spawn('python', [
      scriptPath,
      jdPath,
      resumePath
    ]);

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
