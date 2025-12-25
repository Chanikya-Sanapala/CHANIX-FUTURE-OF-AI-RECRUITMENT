import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  applicant: { type: String, trim: true },
  status: { type: String, enum: ['Applied', 'Interview', 'Rejected', 'Hired'], default: 'Applied' },
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
}, { timestamps: true });

export default mongoose.models.Application || mongoose.model('Application', applicationSchema);
