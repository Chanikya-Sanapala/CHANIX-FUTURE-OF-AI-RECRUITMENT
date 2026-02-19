import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  applicant: { type: String, trim: true },
  status: { type: String, enum: ['Applied', 'Shortlisted', 'Interview', 'Offer', 'Hired', 'Rejected'], default: 'Applied' },
  coverLetter: { type: String },
  customAnswers: [
    {
      questionId: String,
      answer: String,
    },
  ],
  matchScore: { type: Number, default: 0 },
  appliedDate: { type: Date, default: Date.now },
  isSaved: { type: Boolean, default: false },
  scoreVisibleAt: { type: Date },
  scheduledEmailAt: { type: Date },
  emailSent: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.models.Application || mongoose.model('Application', applicationSchema);
