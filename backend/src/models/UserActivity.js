import mongoose from 'mongoose';

const userActivitySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: String, required: true }, // Format YYYY-MM-DD for easy grouping
    durationMinutes: { type: Number, default: 0 },
    lastActive: { type: Date, default: Date.now }
}, { timestamps: true });

// Ensure unique entry per user per day
userActivitySchema.index({ userId: 1, date: 1 }, { unique: true });

export default mongoose.model('UserActivity', userActivitySchema);
