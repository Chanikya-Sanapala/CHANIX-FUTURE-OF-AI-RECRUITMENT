import express from 'express';
import Application from '../models/Application.js';
import Job from '../models/Job.js';
import { authenticateToken } from '../middleware/auth.js';
import { sendSuccess, sendError } from '../utils/responseHandler.js';

const router = express.Router();

import UserActivity from '../models/UserActivity.js';

// POST /api/analytics/activity/record - Call this every minute from frontend
router.post('/activity/record', authenticateToken, async (req, res) => {
    try {
        const userId = req.user._id;
        const today = new Date().toISOString().split('T')[0];

        const activity = await UserActivity.findOneAndUpdate(
            { userId, date: today },
            {
                $inc: { durationMinutes: 1 },
                $set: { lastActive: new Date() }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        sendSuccess(res, 'Activity recorded', { duration: activity.durationMinutes });
    } catch (error) {
        // Fail silently usually, but log it
        console.error('Activity Record Error:', error);
        sendError(res, 'Failed to record activity', error);
    }
});

// GET /api/analytics/activity/stats?range=week|month|year
router.get('/activity/stats', authenticateToken, async (req, res) => {
    try {
        const userId = req.user._id;
        const { range = 'week' } = req.query;

        const endDate = new Date();
        const startDate = new Date();

        if (range === 'month') {
            startDate.setMonth(startDate.getMonth() - 1);
        } else if (range === 'year') {
            startDate.setFullYear(startDate.getFullYear() - 1);
        } else {
            // Default week
            startDate.setDate(startDate.getDate() - 7);
        }

        const startStr = startDate.toISOString().split('T')[0];
        const endStr = endDate.toISOString().split('T')[0];

        const activities = await UserActivity.find({
            userId,
            date: { $gte: startStr, $lte: endStr }
        }).sort({ date: 1 });

        // Format data for graph
        const labels = [];
        const data = [];

        // Fill in missing dates
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const dateStr = d.toISOString().split('T')[0];
            const entry = activities.find(a => a.date === dateStr);
            labels.push(dateStr);
            data.push(entry ? entry.durationMinutes : 0);
        }

        const totalMinutes = data.reduce((a, b) => a + b, 0);

        sendSuccess(res, 'Activity stats fetched', {
            labels,
            data,
            totalMinutes,
            range
        });

    } catch (error) {
        console.error('Activity Stats Error:', error);
        sendError(res, 'Failed to fetch stats', error);
    }
});

// GET /api/analytics/recruiter/stats (Existing)
router.get('/recruiter/stats', authenticateToken, async (req, res) => {
    try {
        const recruiterId = req.user._id;

        // 1. Get all jobs by this recruiter
        const jobs = await Job.find({ recruiterId }).select('_id');
        const jobIds = jobs.map(j => j._id);

        // 2. Get applications for these jobs
        const applications = await Application.find({ job: { $in: jobIds } });

        // 3. Calculate Weekly Activity (Last 7 Days)
        const last7Days = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];
            last7Days.push(dateStr);
        }

        const activityData = last7Days.map(date => {
            const count = applications.filter(app =>
                app.createdAt.toISOString().split('T')[0] === date
            ).length;
            return { date, count };
        });

        // 4. Calculate Pipeline Stats
        const totalApplications = applications.length;
        const pending = applications.filter(a => a.status === 'Pending').length;
        const shortlisted = applications.filter(a => a.status === 'Shortlisted').length;
        const rejected = applications.filter(a => a.status === 'Rejected').length;

        sendSuccess(res, 'Analytics fetched successfully', {
            weeklyActivity: activityData,
            pipeline: { totalApplications, pending, shortlisted, rejected }
        });

    } catch (error) {
        console.error('Analytics Fetch Error:', error);
        sendError(res, 'Failed to fetch analytics', error);
    }
});

export default router;
