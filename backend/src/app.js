import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';
import interviewRoutes from './routes/interviewRoutes.js';
import assessmentRoutes from './routes/assessmentRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import competitionRoutes from './routes/competitionRoutes.js';
import connectionRoutes from './routes/connectionRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import { sendError } from './utils/responseHandler.js';

const app = express();

app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5000, // Relaxed for development
  message: {
    success: false,
    message: 'Too many requests from this IP. Please try again later.'
  }
});
app.use(limiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Smart Engine API is running!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    supportedUserTypes: ['jobseeker', 'recruiter', 'admin']
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/interviews', interviewRoutes);
app.use('/api/connections', connectionRoutes);
app.use('/api/assessments', assessmentRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/competitions', competitionRoutes);
app.use('/api/analytics', analyticsRoutes);

// Serve uploaded files (e.g. resumes) statically
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use('/*splat', (req, res) => {
  sendError(res, `Route ${req.originalUrl} not found`, null, 404);
});

app.use((error, req, res, next) => {
  console.error('Global error:', error);

  if (error.name === 'MongoError' || error.name === 'MongooseError') {
    return sendError(res, 'Database connection error', null, 503);
  }

  if (error.type === 'entity.parse.failed') {
    return sendError(res, 'Invalid JSON format', null, 400);
  }

  sendError(res, 'Internal server error', null, 500);
});

export default app;
