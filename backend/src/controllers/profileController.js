import User from '../models/User.js';
import JobSeekerProfile from '../models/JobSeekerProfile.js';
import RecruiterProfile from '../models/RecruiterProfile.js';
import AdminProfile from '../models/AdminProfile.js';
import { sendSuccess, sendError } from '../utils/responseHandler.js';

const normalizeUserType = (userType) => {
  if (!userType) return '';
  return String(userType).toLowerCase().replace(/\s+/g, '');
};

const getProfileModel = (userType) => {
  const normalized = normalizeUserType(userType);
  switch (normalized) {
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

export const getProfileByUser = async (req, res) => {
  try {
    const { userId, userType } = req.body || {};

    if (!userId) {
      return sendError(res, 'userId is required', null, 400);
    }

    const user = await User.findById(userId);
    if (!user) {
      return sendError(res, 'User not found', null, 404);
    }

    const type = userType || user.userType;
    const ProfileModel = getProfileModel(type);

    let profile = null;
    if (ProfileModel) {
      profile = await ProfileModel.findOne({ userId: user._id });
    }

    const data = {
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        email: user.email,
        userType: user.userType,
        isActive: user.isActive,
        isProfileCompleted: user.isProfileCompleted,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      },
      profile
    };

    if (type === 'jobseeker' && profile) {
      data.profile.experienceYears = profile.experienceYears;
    }

    return sendSuccess(res, 'Profile retrieved successfully', data, 200);
  } catch (error) {
    console.error('Get profile by user error:', error);
    return sendError(res, 'Failed to retrieve profile', null, 500);
  }
};

export const checkProfileCompletion = async (req, res) => {
  try {
    const { userId, userType } = req.body || {};

    if (!userId) {
      return sendError(res, 'userId is required', null, 400);
    }

    const user = await User.findById(userId);
    if (!user) {
      return sendError(res, 'User not found', null, 404);
    }

    const type = userType || user.userType;
    const ProfileModel = getProfileModel(type);

    let completion = 0;

    if (ProfileModel) {
      const profile = await ProfileModel.findOne({ userId: user._id });
      if (profile) {
        completion = 100;
      }
    }

    const data = { percentage: completion };

    return sendSuccess(res, 'Profile completion checked successfully', data, 200);
  } catch (error) {
    console.error('Check profile completion error:', error);
    return sendError(res, 'Failed to check profile completion', null, 500);
  }
};

export const updateJobSeekerProfile = async (req, res) => {
  try {
    const normalizedType = normalizeUserType(req.user.userType);
    if (normalizedType !== 'jobseeker') {
      return sendError(res, 'Access denied. This endpoint is for job seekers only.', null, 403);
    }

    const ProfileModel = getProfileModel(normalizedType);
    let profile = await ProfileModel.findOne({ userId: req.user._id });
    
    if (!profile) {
      profile = new ProfileModel({ userId: req.user._id });
    }

    const allowedFields = [
      'phone', 'dateOfBirth', 'gender', 'address', 'profilePicture',
      'summary', 'experience', 'education', 'skills', 'certifications',
      'languages', 'projects', 'socialProfiles', 'preferences',
      'competitiveExams', 'academicAchievements'
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
    const normalizedType = normalizeUserType(req.user.userType);
    if (normalizedType !== 'recruiter') {
      return sendError(res, 'Access denied. This endpoint is for recruiters only.', null, 403);
    }

    const ProfileModel = getProfileModel(normalizedType);
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

    // Update User model with firstName and lastName if provided
    if (req.body.firstName !== undefined) {
      req.user.firstName = req.body.firstName;
    }
    if (req.body.lastName !== undefined) {
      req.user.lastName = req.body.lastName;
    }

    req.user.isProfileCompleted = true;
    await req.user.save();

    sendSuccess(res, 'Recruiter profile updated successfully', { profile, user: req.user });
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
    const normalizedType = normalizeUserType(req.user.userType);
    if (normalizedType !== 'admin') {
      return sendError(res, 'Access denied. This endpoint is for admins only.', null, 403);
    }

    const ProfileModel = getProfileModel(normalizedType);
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

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return sendError(res, 'No file uploaded', null, 400);
    }

    const userId = req.body.userId || req.user?._id;
    if (!userId) {
      return sendError(res, 'userId is required', null, 400);
    }

    const profile = await JobSeekerProfile.findOneAndUpdate(
      { userId },
      {
        $set: {
          resume: {
            fileName: req.file.originalname,
            filePath: `/uploads/resumes/${req.file.filename}`,
            uploadedAt: new Date()
          }
        }
      },
      { new: true, upsert: true }
    );

    const resumeDoc = profile.resume || {};
    const resume = {
      originalName: resumeDoc.fileName || req.file.originalname,
      filename: req.file.filename,
      path: resumeDoc.filePath || `/uploads/resumes/${req.file.filename}`,
      uploadDate: resumeDoc.uploadedAt || new Date(),
      size: req.file.size
    };

    return sendSuccess(res, 'Resume uploaded successfully', { resume });
  } catch (error) {
    console.error('Upload resume error:', error);
    return sendError(res, 'Failed to upload resume', null, 500);
  }
};

export const uploadPhoto = async (req, res) => {
  try {
    if (!req.file) {
      return sendError(res, 'No file uploaded', null, 400);
    }

    const userId = req.body.userId || req.user?._id;
    const userType = req.body.userType || req.user?.userType || 'jobseeker';
    
    if (!userId) {
      return sendError(res, 'userId is required', null, 400);
    }

    const photoPath = `/uploads/photos/${req.file.filename}`;

    // Get the appropriate profile model based on user type
    const ProfileModel = getProfileModel(userType);
    
    let profile;
    if (ProfileModel) {
      profile = await ProfileModel.findOneAndUpdate(
        { userId },
        {
          $set: {
            profilePicture: photoPath
          }
        },
        { new: true, upsert: true }
      );
    } else {
      // Fallback to JobSeekerProfile if model not found
      profile = await JobSeekerProfile.findOneAndUpdate(
        { userId },
        {
          $set: {
            profilePicture: photoPath
          }
        },
        { new: true, upsert: true }
      );
    }

    const url = photoPath;

    return sendSuccess(res, 'Profile photo uploaded successfully', { url, profile });
  } catch (error) {
    console.error('Upload photo error:', error);
    return sendError(res, 'Failed to upload photo', null, 500);
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

//users
export const users = async (req, res) => {
  try {
    const users = await User.find();
    sendSuccess(res, 'Users retrieved successfully', { users });
  } catch (error) {
    console.error('Get users error:', error);
    sendError(res, 'Failed to retrieve users', null, 500);
  }
};