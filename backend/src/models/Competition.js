import mongoose from 'mongoose';

const CompetitionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  deadline: { type: String },
  prize: { type: String },
}, { timestamps: true });

export default mongoose.model('Competition', CompetitionSchema);
