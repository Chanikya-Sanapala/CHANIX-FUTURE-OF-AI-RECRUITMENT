import User from '../models/User.js';
import JobSeekerProfile from '../models/JobSeekerProfile.js';
import RecruiterProfile from '../models/RecruiterProfile.js';
import AdminProfile from '../models/AdminProfile.js';
import { sendSuccess, sendError } from '../utils/responseHandler.js';

const getProfileModel = (userType) => {
  switch (userType) {
    case 'jobseeker':
      return JobSeekerProfile;
    case 'recruiter':
      return RecruiterProfile;
    case 'admin':
      return AdminProfile;
    default:
      return null;
  }
};

export const updateJobSeekerProfile = async (req, res) => {
  try {
    if (req.user.userType !== 'jobseeker') {
      return sendError(res, 'Access denied. This endpoint is for job seekers only.', null, 403);
    }

    const ProfileModel = getProfileModel(req.user.userType);
    let profile = await ProfileModel.findOne({ userId: req.user._id });
    
    if (!profile) {
      profile = new ProfileModel({ userId: req.user._id });
    }

    const allowedFields = [
      'phone', 'dateOfBirth', 'gender', 'address', 'profilePicture',
      'summary', 'experience', 'education', 'skills', 'certifications',
      'languages', 'projects', 'socialProfiles', 'preferences'
    ];

    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        profile[field] = req.body[field];
      }
    });

    await profile.save();

    req.user.isProfileCompleted = true;
    await req.user.save();

    sendSuccess(res, 'Job seeker profile updated successfully', { profile });
  } catch (error) {
    console.error('Update job seeker profile error:', error);
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => ({
        field: err.path,
        message: err.message
      }));
      return sendError(res, 'Validation failed', validationErrors, 422);
    }
    
    sendError(res, 'Failed to update profile', null, 500);
  }
};

export const updateRecruiterProfile = async (req, res) => {
  try {
    if (req.user.userType !== 'recruiter') {
      return sendError(res, 'Access denied. This endpoint is for recruiters only.', null, 403);
    }

    const ProfileModel = getProfileModel(req.user.userType);
    let profile = await ProfileModel.findOne({ userId: req.user._id });
    
    if (!profile) {
      profile = new ProfileModel({ userId: req.user._id });
    }

    // Validate required fields for recruiter
    const requiredFields = ['phone', 'company.name', 'company.industry', 'company.size', 'position'];
    const errors = [];

    if (!req.body.phone) errors.push({ field: 'phone', message: 'Phone number is required' });
    if (!req.body.company?.name) errors.push({ field: 'company.name', message: 'Company name is required' });
    if (!req.body.company?.industry) errors.push({ field: 'company.industry', message: 'Company industry is required' });
    if (!req.body.company?.size) errors.push({ field: 'company.size', message: 'Company size is required' });
    if (!req.body.position) errors.push({ field: 'position', message: 'Position is required' });

    if (errors.length > 0) {
      return sendError(res, 'Validation failed', errors, 422);
    }

    const allowedFields = [
      'phone', 'profilePicture', 'company', 'position', 'department',
      'bio', 'specializations', 'experienceInRecruitment', 'socialProfiles'
    ];

    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        profile[field] = req.body[field];
      }
    });

    await profile.save();

    req.user.isProfileCompleted = true;
    await req.user.save();

    sendSuccess(res, 'Recruiter profile updated successfully', { profile });
  } catch (error) {
    console.error('Update recruiter profile error:', error);
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => ({
        field: err.path,
        message: err.message
      }));
      return sendError(res, 'Validation failed', validationErrors, 422);
    }
    
    sendError(res, 'Failed to update profile', null, 500);
  }
};

export const updateAdminProfile = async (req, res) => {
  try {
    if (req.user.userType !== 'admin') {
      return sendError(res, 'Access denied. This endpoint is for admins only.', null, 403);
    }

    const ProfileModel = getProfileModel(req.user.userType);
    let profile = await ProfileModel.findOne({ userId: req.user._id });
    
    if (!profile) {
      profile = new ProfileModel({ userId: req.user._id });
    }

    // Validate required fields for admin
    const errors = [];

    if (!req.body.phone) errors.push({ field: 'phone', message: 'Phone number is required' });
    if (!req.body.department) errors.push({ field: 'department', message: 'Department is required' });

    if (errors.length > 0) {
      return sendError(res, 'Validation failed', errors, 422);
    }

    const allowedFields = [
      'phone', 'profilePicture', 'role', 'department', 'permissions',
      'bio', 'workingHours', 'emergencyContact'
    ];

    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        profile[field] = req.body[field];
      }
    });

    await profile.save();

    req.user.isProfileCompleted = true;
    await req.user.save();

    sendSuccess(res, 'Admin profile updated successfully', { profile });
  } catch (error) {
    console.error('Update admin profile error:', error);
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => ({
        field: err.path,
        message: err.message
      }));
      return sendError(res, 'Validation failed', validationErrors, 422);
    }
    
    sendError(res, 'Failed to update profile', null, 500);
  }
};

export const getDetailedProfile = async (req, res) => {
  try {
    const ProfileModel = getProfileModel(req.user.userType);
    let profile = null;
    
    if (ProfileModel) {
      profile = await ProfileModel.findOne({ userId: req.user._id });
    }

    const responseData = {
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
        createdAt: req.user.createdAt,
        updatedAt: req.user.updatedAt
      },
      profile
    };

    if (req.user.userType === 'jobseeker' && profile) {
      responseData.profile.experienceYears = profile.experienceYears;
    }

    sendSuccess(res, `${req.user.userType} profile retrieved successfully`, responseData);
  } catch (error) {
    console.error('Get detailed profile error:', error);
    sendError(res, 'Failed to retrieve profile', null, 500);
  }
};

export const deleteProfile = async (req, res) => {
  try {
    const ProfileModel = getProfileModel(req.user.userType);
    
    if (ProfileModel) {
      await ProfileModel.findOneAndDelete({ userId: req.user._id });
    }

    req.user.isProfileCompleted = false;
    await req.user.save();

    sendSuccess(res, 'Profile deleted successfully');
  } catch (error) {
    console.error('Delete profile error:', error);
    sendError(res, 'Failed to delete profile', null, 500);
  }
};
