import express from 'express';
import Competition from '../models/Competition.js';
import CompetitionParticipation from '../models/CompetitionParticipation.js';
import { sendSuccess, sendError } from '../utils/responseHandler.js';

const router = express.Router();

// GET /api/competitions?userId=...
// Returns all competitions with participated flag for the user (if provided)
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;

    const competitions = await Competition.find({}).sort({ createdAt: -1 });

    if (!userId) {
      const plain = competitions.map(c => ({
        id: c._id,
        _id: c._id,
        name: c.name,
        deadline: c.deadline,
        prize: c.prize,
        participated: false
      }));
      return sendSuccess(res, 'Competitions fetched successfully', plain, 200);
    }

    const parts = await CompetitionParticipation.find({ userId, participated: true });
    const participatedIds = new Set(parts.map(p => String(p.competitionId)));

    const data = competitions.map(c => ({
      id: c._id,
      _id: c._id,
      name: c.name,
      deadline: c.deadline,
      prize: c.prize,
      participated: participatedIds.has(String(c._id))
    }));

    return sendSuccess(res, 'Competitions fetched successfully', data, 200);
  } catch (error) {
    console.error('Competitions fetch error:', error);
    return sendError(res, 'Failed to fetch competitions', error.message || error, 500);
  }
});

// POST /api/competitions { userId, competitionId }
router.post('/', async (req, res) => {
  try {
    const { userId, competitionId } = req.body || {};
    if (!userId || !competitionId) return sendError(res, 'userId and competitionId are required', null, 400);

    const cmp = await Competition.findById(competitionId);
    if (!cmp) return sendError(res, 'Competition not found', null, 404);

    const part = await CompetitionParticipation.findOneAndUpdate(
      { userId, competitionId },
      { participated: true },
      { upsert: true, new: true }
    );

    return sendSuccess(res, 'Competition participation saved', { 
      id: part._id,
      competitionId: part.competitionId,
      participated: part.participated
    }, 200);
  } catch (error) {
    console.error('Competition participation error:', error);
    return sendError(res, 'Failed to participate in competition', error.message || error, 500);
  }
});

export default router;
