import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { jwtConfig } from '../config/jwt.js';
import { sendError } from '../utils/responseHandler.js';

export const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
<<<<<<< HEAD

    // Debug logging for token issues
    if (!authHeader) {
      console.warn('Auth middleware: Missing Authorization header');
    } else {
      console.log('Auth middleware: Authorization header received:', authHeader);
    }
=======
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
    
    if (!token) {
      return sendError(res, 'Access token required', null, 401);
    }
    
    const decoded = jwt.verify(token, jwtConfig.secret, {
      issuer: jwtConfig.issuer,
      audience: jwtConfig.audience
    });
    
    const user = await User.findById(decoded.userId);
    if (!user || !user.isActive) {
      return sendError(res, 'User not found or inactive', null, 401);
    }
    
    req.user = user;
    next();
    
  } catch (error) {
<<<<<<< HEAD
    console.error('Authentication error:', error.name, error.message);
    if (error.name === 'JsonWebTokenError') {
      console.error('JWT error details:', error);
=======
    if (error.name === 'JsonWebTokenError') {
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
      return sendError(res, 'Invalid token', null, 401);
    }
    if (error.name === 'TokenExpiredError') {
      return sendError(res, 'Token expired', null, 401);
    }
    
<<<<<<< HEAD
    console.error('Authentication unexpected error:', error);
=======
    console.error('Authentication error:', error);
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
    return sendError(res, 'Authentication failed', null, 500);
  }
};
