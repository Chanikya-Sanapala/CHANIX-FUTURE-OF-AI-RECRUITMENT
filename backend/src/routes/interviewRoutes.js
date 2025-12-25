import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { scheduleInterview, getInterviewByToken, submitInterview } from '../controllers/interviewController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Multer Setup
const uploadDir = path.join(process.cwd(), 'uploads', 'interviews');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname) || '.webm'; // Default to webm if missing
    cb(null, `interview-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({ storage });

// Routes
router.get('/my-interviews', authenticateToken, async (req, res) => {
  try {
    const { default: Interview } = await import('../models/Interview.js');
    const interviews = await Interview.find({ candidateId: req.user.userId })
      .populate('jobId', 'title company')
      .sort({ createdAt: -1 });
    res.json({ success: true, data: interviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/recruiter', authenticateToken, async (req, res) => {
  try {
    // Find jobs posted by this recruiter
    // We need to import Job model or assume interview controller handles it.
    // Let's implement logic here or in controller. implementing here for speed as controller file not open.
    // Need to dynamically import models or relying on controller is better.
    // Actually, let's stick to modifying the controller? No, I can't see controller file easily without opening it.
    // I'll implement inline here using mongoose models if I can import them.
    // Importing Job and Interview models.
    const { default: Job } = await import('../models/Job.js');
    const { default: Interview } = await import('../models/Interview.js');

    const jobs = await Job.find({ recruiterId: req.user.userId }).select('_id');
    const jobIds = jobs.map(j => j._id);

    const interviews = await Interview.find({ jobId: { $in: jobIds } })
      .populate('candidateId', 'firstName lastName email')
      .populate('jobId', 'title')
      .sort({ createdAt: -1 });

    res.json({ success: true, data: interviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/schedule', authenticateToken, scheduleInterview);
router.get('/:token', getInterviewByToken);
router.post('/submit', upload.single('recording'), submitInterview);

export default router;
