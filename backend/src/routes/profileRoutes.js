import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import {
  updateJobSeekerProfile,
  updateRecruiterProfile,
  updateAdminProfile,
  getDetailedProfile,
  deleteProfile,
  getProfileByUser,
  checkProfileCompletion,
  uploadResume,
  uploadPhoto,
  removeResume,
  removePhoto,
  getSuggestions
} from '../controllers/profileController.js';
import {
  validateJobSeekerProfile,
  validateRecruiterProfile,
  validateAdminProfile,
  checkValidation
} from '../middleware/validation.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Multer setup for resume uploads
const resumesDir = path.join(process.cwd(), 'uploads', 'resumes');
if (!fs.existsSync(resumesDir)) {
  fs.mkdirSync(resumesDir, { recursive: true });
}

const resumeStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, resumesDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const safeName = file.originalname.replace(/[^a-zA-Z0-9.\-]/g, '_');
    cb(null, uniqueSuffix + '-' + safeName);
  }
});

const uploadResumeMulter = multer({
  storage: resumeStorage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

// Multer setup for profile photo uploads
const photosDir = path.join(process.cwd(), 'uploads', 'photos');
if (!fs.existsSync(photosDir)) {
  fs.mkdirSync(photosDir, { recursive: true });
}

const photoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, photosDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const safeName = file.originalname.replace(/[^a-zA-Z0-9.\-]/g, '_');
    cb(null, uniqueSuffix + '-' + safeName);
  }
});

const uploadPhotoMulter = multer({
  storage: photoStorage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// Public endpoints used by the frontend dashboard (body: { userId, userType })
router.post('/get', getProfileByUser);
router.post('/check-completion', checkProfileCompletion);
router.get('/suggestions', authenticateToken, getSuggestions);

// Authenticated, token-based detailed profile
router.get('/detailed', authenticateToken, getDetailedProfile);

// Resume upload for jobseekers
router.post('/upload-resume', authenticateToken, uploadResumeMulter.single('file'), uploadResume);

// Profile photo upload for jobseekers
router.post('/upload-photo', authenticateToken, uploadPhotoMulter.single('file'), uploadPhoto);

// Profile photo removal
router.delete('/remove-photo', authenticateToken, removePhoto);

// Resume removal for jobseekers
router.delete('/remove-resume', authenticateToken, removeResume);

// Jobseeker profile update (primary endpoint)
router.put('/jobseeker',
  authenticateToken,
  validateJobSeekerProfile,
  checkValidation,
  updateJobSeekerProfile
);

// Backward-compatible alias used by some frontend code
router.put('/update',
  authenticateToken,
  validateJobSeekerProfile,
  checkValidation,
  updateJobSeekerProfile
);
router.put('/recruiter',
  authenticateToken,
  validateRecruiterProfile,
  checkValidation,
  updateRecruiterProfile
);

router.put('/admin',
  authenticateToken,
  validateAdminProfile,
  checkValidation,
  updateAdminProfile
);

router.delete('/', authenticateToken, deleteProfile);

export default router;
