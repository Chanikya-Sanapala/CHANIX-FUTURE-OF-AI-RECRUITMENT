import mongoose from 'mongoose';

const customQuestionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  question: { type: String, required: true },
  isRequired: { type: Boolean, default: false },
}, { _id: false });

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  company: { type: String, trim: true },
  description: { type: String },
  skillsRequired: [{ type: String, trim: true }],
  experience: { type: String, trim: true },
  location: { type: String, trim: true },
  jobType: { type: String, trim: true },
  salary: { type: String, trim: true },
  minSalary: { type: Number },
  maxSalary: { type: Number },
  deadline: { type: Date },
  postedDate: { type: Date, default: Date.now },
  urgent: { type: Boolean, default: false },
  featured: { type: Boolean, default: false },
  applicants: { type: Number, default: 0 },
  recruiterId: { type: String, trim: true },
  status: { type: String, enum: ['Active', 'Closed', 'Draft'], default: 'Active' },
  customQuestions: [customQuestionSchema],
}, { timestamps: true });

export default mongoose.models.Job || mongoose.model('Job', jobSchema);
