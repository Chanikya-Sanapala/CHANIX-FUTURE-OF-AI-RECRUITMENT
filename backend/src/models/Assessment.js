import mongoose from 'mongoose';

const AssessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  assessmentId: { type: String, required: true },
  name: { type: String, required: true },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'], default: 'Not Started' },
  score: { type: Number }
}, { timestamps: true });

export default mongoose.model('Assessment', AssessmentSchema);
