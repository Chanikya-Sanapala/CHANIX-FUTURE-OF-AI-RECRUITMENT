import mongoose from 'mongoose';

const recruiterProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  phone: { type: String, trim: true },
  profilePicture: String,
  company: {
    name: String,
    website: String,
    industry: String,
    size: { type: String, enum: ['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'] },
    description: String,
    logo: String,
    address: { street: String, city: String, state: String, country: String, zipCode: String },
    founded: Date
  },
  position: String,
  department: String,
  bio: { type: String, maxlength: 500 },
  specializations: [String],
  experienceInRecruitment: { type: Number, min: 0, max: 50 },
  socialProfiles: { linkedin: String, twitter: String },
  verificationStatus: { isCompanyVerified: { type: Boolean, default: false }, isEmailVerified: { type: Boolean, default: false }, verifiedAt: Date, verificationDocument: String },
  subscriptionPlan: { type: String, enum: ['free', 'basic', 'premium', 'enterprise'], default: 'free' },
  permissions: { canPostJobs: { type: Boolean, default: true }, canViewProfiles: { type: Boolean, default: true }, maxJobPostsPerMonth: { type: Number, default: 5 } }
}, { timestamps: true });

export default mongoose.models.RecruiterProfile || mongoose.model('RecruiterProfile', recruiterProfileSchema);
