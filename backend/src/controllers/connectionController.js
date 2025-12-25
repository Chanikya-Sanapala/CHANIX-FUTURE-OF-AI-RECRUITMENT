import Connection from '../models/Connection.js';
import User from '../models/User.js';

// Send a connection request
export const sendRequest = async (req, res) => {
    try {
        const requesterId = req.user._id;
        const { recipientId } = req.body;

        if (requesterId === recipientId) {
            return res.status(400).json({ message: 'Cannot connect with yourself' });
        }

        const existingConnection = await Connection.findOne({
            $or: [
                { requester: requesterId, recipient: recipientId },
                { requester: recipientId, recipient: requesterId }
            ]
        });

        if (existingConnection) {
            return res.status(400).json({ message: 'Connection request already exists or you are already connected' });
        }

        const newConnection = new Connection({
            requester: requesterId,
            recipient: recipientId,
            status: 'pending'
        });

        await newConnection.save();

        res.status(201).json({ message: 'Connection request sent successfully', connection: newConnection });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get requests for the current user
export const getRequests = async (req, res) => {
    try {
        const userId = req.user._id;
        console.log('Fetching connection requests for recipient:', userId);

        // Requests where I am the recipient and status is pending
        const requests = await Connection.find({ recipient: userId, status: 'pending' })
            .populate('requester', 'firstName lastName headline profilePicture email')
            .sort({ createdAt: -1 });

        console.log(`Found ${requests.length} pending requests for user ${userId}`);
        res.json(requests);
    } catch (error) {
        console.error('Error in getRequests:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all connections (accepted) and pending sent requests
export const getMyConnections = async (req, res) => {
    try {
        const userId = req.user._id;

        // Find all connections involving the user
        const connections = await Connection.find({
            $or: [{ requester: userId }, { recipient: userId }]
        });

        // Transform to simple list with status
        // For pending sent requests: requester=me, status=pending
        // For accepted: status=accepted
        const result = connections.map(conn => {
            const isRequester = conn.requester.toString() === userId;
            const otherUserId = isRequester ? conn.recipient : conn.requester;
            return {
                connectionId: conn._id,
                otherUserId,
                status: conn.status,
                isRequester
            };
        });

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Respond to request (Accept/Reject)
export const respondToRequest = async (req, res) => {
    try {
        const { connectionId } = req.params;
        const { status } = req.body; // 'accepted' or 'rejected'
        const userId = req.user._id;

        if (!['accepted', 'rejected'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status' });
        }

        const connection = await Connection.findOne({ _id: connectionId, recipient: userId });

        if (!connection) {
            return res.status(404).json({ message: 'Connection request not found' });
        }

        if (status === 'rejected') {
            await Connection.findByIdAndDelete(connectionId);
            return res.json({ message: 'Connection request rejected' });
        }

        connection.status = status;
        await connection.save();

        res.json({ message: `Connection request ${status}`, connection });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
