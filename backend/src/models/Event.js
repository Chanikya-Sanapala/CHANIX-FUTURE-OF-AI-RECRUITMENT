import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String },
  link: { type: String },
}, { timestamps: true });

export default mongoose.model('Event', EventSchema);
