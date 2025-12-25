import express from 'express';
import { sendRequest, getRequests, getMyConnections, respondToRequest } from '../controllers/connectionController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/request', authenticateToken, sendRequest);
router.get('/requests', authenticateToken, getRequests); // Incoming requests
router.get('/my-connections', authenticateToken, getMyConnections); // All status
router.put('/:connectionId/respond', authenticateToken, respondToRequest);

export default router;
