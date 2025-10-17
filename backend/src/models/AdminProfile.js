import mongoose from 'mongoose';

const adminProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  phone: {
    type: String,
    trim: true,
    match: [/^[0-9]{10}$/, 'Phone number must be 10 digits']
  },
  profilePicture: String,
  role: {
    type: String,
    enum: ['super-admin', 'admin', 'moderator', 'organiser'],
    default: 'organiser'
  },
  department: {
    type: String,
    enum: ['operations', 'hr', 'tech', 'marketing', 'finance', 'support']
  },
  permissions: [{
    type: String,
    enum: [
      'manage-users',
      'manage-jobs',
      'manage-companies',
      'view-analytics',
      'manage-payments',
      'moderate-content',
      'system-settings',
      'export-data',
      'manage-admins'
    ]
  }],
  bio: {
    type: String,
    maxlength: [300, 'Bio cannot exceed 300 characters']
  },
  workingHours: {
    timezone: {
      type: String,
      default: 'Asia/Kolkata'
    },
    availability: [{
      day: {
        type: String,
        enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
      },
      startTime: String,
      endTime: String
    }]
  },
  emergencyContact: {
    name: String,
    phone: String,
    relationship: String
  },
  lastActiveAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default mongoose.model('AdminProfile', adminProfileSchema);
