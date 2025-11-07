import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { jwtConfig, jwtOptions } from '../config/jwt.js';
import { sendSuccess, sendError } from '../utils/responseHandler.js';
import { sendWelcomeEmail } from '../routes/mail/emailService.js';

const generateToken = (userId) => {
  return jwt.sign(
    { userId, type: 'access' },
    jwtConfig.secret,
    jwtOptions
  );
};

export const register = async (req, res) => {
  try {
    const { username, email, password, userType } = req.body;

    const user = new User({
      username,
      email,
      password,
      userType
    });
    
    await user.save();
    await sendWelcomeEmail(email, username);
    
    // Don't create profile during registration to avoid validation errors
    // Profile will be created when user first updates their profile
    
    const token = generateToken(user._id);
    
    user.lastLogin = new Date();
    await user.save();
    
    sendSuccess(res, 'User registered successfully', {
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        userType: user.userType,
        isActive: user.isActive,
        isProfileCompleted: user.isProfileCompleted,
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

// Keep other methods unchanged
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
        username: user.username,
        // lastName: user.lastName,
        // fullName: user.fullName,
        email: user.email,
        userType: user.userType,
        isActive: user.isActive,
        isProfileCompleted: user.isProfileCompleted,
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
        userType: req.user.userType,
        isActive: req.user.isActive,
        isProfileCompleted: req.user.isProfileCompleted,
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
        userType: user.userType,
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




// changePassword
export const changePassword = async (req, res) => {
  try {
    const { userId, newPassword } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return sendError(res, 'User not found', null, 404);
    }

    user.password = newPassword;
    await user.save();

    sendSuccess(res, 'Password changed successfully');
  } catch (error) {
    console.error('Change password error:', error);
    sendError(res, 'Failed to change password', null, 500);
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findByEmail(email);
    if (!user) {
      return sendError(res, 'If that email address is in our database, we will send you an email to reset your password.', null, 200);
    }
    // Here you would generate a password reset token and send it via email
    // For simplicity, we are skipping that part
    sendSuccess(res, 'If that email address is in our database, we will send you an email to reset your password.');
  } catch (error) {
    console.error('Reset password error:', error);
    sendError(res, 'Failed to initiate password reset', null, 500);
  }
};

// export const updatePassword = async (req, res) => {
//   try {
//     const { userId, token, password } = req.body;
//     // Here you would verify the token
//     // For simplicity, we are skipping that part
//     const user = await User.findById(userId);
//     if (!user) {
//       return sendError(res, 'User not found', null, 404);
//     }
//     user.password = password;
//     await user.save();
//     sendSuccess(res, 'Password updated successfully');
//   } catch (error) {
//     console.error('Update password error:', error);
//     sendError(res, 'Failed to update password', null, 500);
//   }
// };


// router.get('/check-email', 
  export const checkEmail = async (req, res) => {
    try {
        const { email } = req.query;
        console.log("Received email:", email);

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        const user = await User.findOne({ email: email.toLowerCase() });
        console.log("User found:", user);

        res.json({ exists: !!user });
    } catch (err) {
        console.error("Error in /check-email:", err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
