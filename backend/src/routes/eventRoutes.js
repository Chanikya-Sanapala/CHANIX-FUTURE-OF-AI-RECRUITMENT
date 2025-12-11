import express from 'express';
import Event from '../models/Event.js';
import EventRegistration from '../models/EventRegistration.js';
import { sendSuccess, sendError } from '../utils/responseHandler.js';

const router = express.Router();

// GET /api/events?userId=...
// Returns only events the user is registered for
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return sendSuccess(res, 'Events fetched successfully', [], 200);

    const regs = await EventRegistration.find({ userId, registered: true }).populate('eventId');
    const events = regs
      .filter(r => !!r.eventId)
      .map(r => ({
        id: r.eventId._id,
        _id: r.eventId._id,
        name: r.eventId.name,
        title: r.eventId.name,
        date: r.eventId.date,
        location: r.eventId.location,
        link: r.eventId.link,
        registered: true
      }));

    return sendSuccess(res, 'Events fetched successfully', events, 200);
  } catch (error) {
    console.error('Events fetch error:', error);
    return sendError(res, 'Failed to fetch events', error.message || error, 500);
  }
});

// POST /api/events { action: 'register'|'unregister', userId, eventId }
router.post('/', async (req, res) => {
  try {
    const { action, userId, eventId } = req.body || {};
    if (!userId || !eventId) return sendError(res, 'userId and eventId are required', null, 400);

    const evt = await Event.findById(eventId);
    if (!evt) return sendError(res, 'Event not found', null, 404);

    if (action === 'unregister') {
      await EventRegistration.findOneAndUpdate(
        { userId, eventId },
        { registered: false },
        { upsert: true, new: true }
      );
      return sendSuccess(res, 'Unregistered from event successfully', { eventId, registered: false }, 200);
    }

    // Default to register
    await EventRegistration.findOneAndUpdate(
      { userId, eventId },
      { registered: true },
      { upsert: true, new: true }
    );
    return sendSuccess(res, 'Registered for event successfully', { eventId, registered: true }, 200);
  } catch (error) {
    console.error('Event registration error:', error);
    return sendError(res, 'Failed to update event registration', error.message || error, 500);
  }
});

export default router;
