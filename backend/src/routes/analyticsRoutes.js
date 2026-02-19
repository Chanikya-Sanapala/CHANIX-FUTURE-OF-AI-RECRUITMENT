import express from 'express';
import { getRecruiterPerformance } from '../controllers/analyticsController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/recruiter-performance', authenticateToken, getRecruiterPerformance);

export default router;
