import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { jwtConfig, jwtOptions } from '../config/jwt.js';
import { sendSuccess, sendError } from '../utils/responseHandler.js';

const generateToken = (userId) => {
  return jwt.sign(
    { userId, type: 'access' },
    jwtConfig.secret,
    jwtOptions
  );
};

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    
    const user = new User({
      firstName,
      lastName,
      email,
      password
    });
    
    await user.save();
    
    const token = generateToken(user._id);
    
    user.lastLogin = new Date();
    await user.save();
    
    sendSuccess(res, 'User registered successfully', {
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        email: user.email,
        isActive: user.isActive,
        createdAt: user.createdAt
      }
    }, 201);
    
  } catch (error) {
    console.error('Registration error:', error);
    
    if (error.code === 11000) {
      return sendError(res, 'Email already exists. Please use a different email.', null, 409);
    }
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => ({
        field: err.path,
        message: err.message
      }));
      return sendError(res, 'Validation failed', validationErrors, 422);
    }
    
    sendError(res, 'Registration failed. Please try again.', null, 500);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findByEmail(email);
    if (!user) {
      return sendError(res, 'Invalid email or password', null, 401);
    }
    
    if (user.isLocked()) {
      return sendError(res, 'Account temporarily locked due to too many failed login attempts. Please try again later.', null, 423);
    }
    
    if (!user.isActive) {
      return sendError(res, 'Account is inactive. Please contact support.', null, 401);
    }
    
    const isPasswordValid = await user.comparePassword(password);
    
    if (!isPasswordValid) {
      await user.incLoginAttempts();
      return sendError(res, 'Invalid email or password', null, 401);
    }
    
    if (user.loginAttempts > 0) {
      await user.resetLoginAttempts();
    }
    
    const token = generateToken(user._id);
    
    user.lastLogin = new Date();
    await user.save();
    
    sendSuccess(res, 'Login successful', {
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        email: user.email,
        isActive: user.isActive,
        lastLogin: user.lastLogin
      }
    });
    
  } catch (error) {
    console.error('Login error:', error);
    sendError(res, 'Login failed. Please try again.', null, 500);
  }
};

export const getProfile = async (req, res) => {
  try {
    sendSuccess(res, 'Profile retrieved successfully', {
      user: {
        id: req.user._id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        fullName: req.user.fullName,
        email: req.user.email,
        isActive: req.user.isActive,
        lastLogin: req.user.lastLogin,
        createdAt: req.user.createdAt
      }
    });
  } catch (error) {
    console.error('Get profile error:', error);
    sendError(res, 'Failed to retrieve profile', null, 500);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const user = req.user;
    
    if (firstName) {
      user.firstName = firstName;
    }
    if (lastName) {
      user.lastName = lastName;
    }
    
    await user.save();
    
    sendSuccess(res, 'Profile updated successfully', {
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        email: user.email,
        isActive: user.isActive,
        updatedAt: user.updatedAt
      }
    });
    
  } catch (error) {
    console.error('Update profile error:', error);
    sendError(res, 'Failed to update profile', null, 500);
  }
};

export const logout = async (req, res) => {
  try {
    sendSuccess(res, 'Logout successful. Please remove the token from client storage.');
  } catch (error) {
    console.error('Logout error:', error);
    sendError(res, 'Logout failed', null, 500);
  }
};
