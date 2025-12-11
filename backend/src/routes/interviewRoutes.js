import express from 'express';
import Interview from '../models/Interview.js';
import { sendSuccess, sendError } from '../utils/responseHandler.js';

const router = express.Router();

// GET /api/interviews?userId=...
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return sendSuccess(res, 'Interviews fetched successfully', [], 200);

    const interviews = await Interview.find({ userId }).sort({ date: 1, time: 1 });
    const data = interviews.map(i => ({
      id: i._id,
      _id: i._id,
      title: i.title,
      date: i.date,
      time: i.time,
      link: i.link,
      status: i.status
    }));

    return sendSuccess(res, 'Interviews fetched successfully', data, 200);
  } catch (error) {
    console.error('Interviews fetch error:', error);
    return sendError(res, 'Failed to fetch interviews', error.message || error, 500);
  }
});

// PATCH /api/interviews { id, status }
router.patch('/', async (req, res) => {
  try {
    const { id, status } = req.body || {};
    if (!id || !status) return sendError(res, 'id and status are required', null, 400);

    const interview = await Interview.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!interview) return sendError(res, 'Interview not found', null, 404);

    const data = {
      id: interview._id,
      _id: interview._id,
      title: interview.title,
      date: interview.date,
      time: interview.time,
      link: interview.link,
      status: interview.status
    };

    return sendSuccess(res, 'Interview status updated', data, 200);
  } catch (error) {
    console.error('Interview update error:', error);
    return sendError(res, 'Failed to update interview', error.message || error, 500);
  }
});

export default router;
