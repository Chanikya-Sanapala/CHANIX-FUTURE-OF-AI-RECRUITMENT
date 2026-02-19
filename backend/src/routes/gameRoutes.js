import express from 'express';
import User from '../models/User.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// @desc    Submit game result
// @route   POST /api/games/result
// @access  Private
router.post('/result', authenticateToken, async (req, res) => {
    try {
        const { gameId, score } = req.body;
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Add new score
        user.gameScores.push({
            gameId,
            score,
            playedAt: new Date()
        });

        // Calculate aggregated cognitive score (simple average for now, can be weighted)
        const totalScore = user.gameScores.reduce((acc, curr) => acc + curr.score, 0);
        // Keep last 10 games for average to reflect recent performance
        const recentGames = user.gameScores.slice(-10);
        const recentAverage = recentGames.reduce((acc, curr) => acc + curr.score, 0) / recentGames.length;

        // Normalize to 0-100 scale (assuming game max score is around 1000-2000, we scale it down)
        // For Memory Matrix, let's say max reasonable score is 2000.
        user.cognitiveScore = Math.min(Math.round(recentAverage / 20), 100);

        // Update Recommmended Status
        // If cognitive score > 80 (approx 1600 points avg), mark as recommended
        user.isRecruiterRecommended = user.cognitiveScore >= 80;

        await user.save();

        res.status(200).json({
            success: true,
            cognitiveScore: user.cognitiveScore,
            isRecruiterRecommended: user.isRecruiterRecommended,
            streak: user.gameScores.length // Simple play usage streak
        });
    } catch (error) {
        console.error('Game result error:', error);
        res.status(500).json({ message: 'Server error processing game result' });
    }
});

// @desc    Get user game stats
// @route   GET /api/games/stats
// @access  Private
router.get('/stats', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('gameScores cognitiveScore isRecruiterRecommended');
        res.json({
            gameScores: user.gameScores,
            cognitiveScore: user.cognitiveScore,
            isRecruiterRecommended: user.isRecruiterRecommended
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error fetching game stats' });
    }
});

export default router;
