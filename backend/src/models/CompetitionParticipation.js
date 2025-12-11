import mongoose from 'mongoose';

const CompetitionParticipationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  competitionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Competition', required: true },
  participated: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('CompetitionParticipation', CompetitionParticipationSchema);
