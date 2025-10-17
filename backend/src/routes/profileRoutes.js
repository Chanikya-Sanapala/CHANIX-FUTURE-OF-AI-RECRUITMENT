import express from 'express';
import {
  updateJobSeekerProfile,
  updateRecruiterProfile,
  updateAdminProfile,
  getDetailedProfile,
  deleteProfile
} from '../controllers/profileController.js';
import {
  validateJobSeekerProfile,
  validateRecruiterProfile,
  validateAdminProfile,
  checkValidation
} from '../middleware/validation.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/detailed', authenticateToken, getDetailedProfile);

router.put('/jobseeker', 
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
