import mongoose from 'mongoose';

const EventRegistrationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  registered: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('EventRegistration', EventRegistrationSchema);
