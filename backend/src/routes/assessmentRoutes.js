import express from 'express';
import Assessment from '../models/Assessment.js';
import { sendSuccess, sendError } from '../utils/responseHandler.js';

const router = express.Router();

// GET /api/assessments?userId=...
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return sendSuccess(res, 'Assessments fetched successfully', [], 200);

    const docs = await Assessment.find({ userId }).sort({ createdAt: -1 });
    const data = docs.map(a => ({
      id: a.assessmentId,
      _id: a._id,
      assessmentId: a.assessmentId,
      name: a.name,
      status: a.status,
      score: a.score
    }));

    return sendSuccess(res, 'Assessments fetched successfully', data, 200);
  } catch (error) {
    console.error('Assessments fetch error:', error);
    return sendError(res, 'Failed to fetch assessments', error.message || error, 500);
  }
});

// POST /api/assessments { action: 'start'|'submit', userId, assessmentId, score?, name? }
router.post('/', async (req, res) => {
  try {
    const { action, userId, assessmentId, score, name } = req.body || {};
    if (!userId || !assessmentId) return sendError(res, 'userId and assessmentId are required', null, 400);

    let doc = await Assessment.findOne({ userId, assessmentId });

    if (action === 'submit') {
      if (!doc) {
        doc = await Assessment.create({
          userId,
          assessmentId,
          name: name || `Assessment ${assessmentId}`,
          status: 'Completed',
          score: typeof score === 'number' ? score : undefined
        });
      } else {
        doc.status = 'Completed';
        if (typeof score === 'number') doc.score = score;
        await doc.save();
      }
    } else {
      // default: start
      if (!doc) {
        doc = await Assessment.create({
          userId,
          assessmentId,
          name: name || `Assessment ${assessmentId}`,
          status: 'In Progress'
        });
      } else {
        doc.status = 'In Progress';
        await doc.save();
      }
    }

    const data = {
      id: doc.assessmentId,
      _id: doc._id,
      assessmentId: doc.assessmentId,
      name: doc.name,
      status: doc.status,
      score: doc.score
    };

    return sendSuccess(res, 'Assessment updated successfully', data, 200);
  } catch (error) {
    console.error('Assessment update error:', error);
    return sendError(res, 'Failed to update assessment', error.message || error, 500);
  }
});

export default router;
