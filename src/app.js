import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import authRoutes from './routes/authRoutes.js';
import { sendError } from './utils/responseHandler.js';

const app = express();

app.use(helmet());

const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
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
    environment: process.env.NODE_ENV
  });
});

app.use('/api/auth', authRoutes);

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
