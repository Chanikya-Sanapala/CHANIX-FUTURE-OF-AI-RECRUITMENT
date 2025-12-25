import Interview from '../models/Interview.js';
import Job from '../models/Job.js';
import User from '../models/User.js';
import { sendSuccess, sendError } from '../utils/responseHandler.js';
import crypto from 'crypto';

// Python Service URL
const AI_SERVICE_URL = 'http://127.0.0.1:5001';

// Helper to create interview internal (for use by other controllers)
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

// Fix Path Resolution
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to create interview internal (for use by other controllers)
export const createInterviewInternal = async (candidateId, jobId) => {
    const job = await Job.findById(jobId);
    if (!job) throw new Error('Job not found');

    const user = await User.findById(candidateId);
    if (!user) throw new Error('Candidate not found');

    // Check if valid interview already exists
    const existingInterest = await Interview.findOne({
        candidateId,
        jobId,
        status: { $in: ['pending'] },
        expiresAt: { $gt: new Date() }
    });

    // Load Predefined Questions from AI folder (Absolute Path via __dirname)
    // backend/src/controllers -> ../../../ai/questions.txt
    const questionsPath = path.resolve(__dirname, '../../../ai/questions.txt');
    let fileQuestions = ["Tell me about yourself.", "Why do you want this job?"];

    console.log("Loading questions from:", questionsPath);

    try {
        if (fs.existsSync(questionsPath)) {
            const fileContent = fs.readFileSync(questionsPath, 'utf-8');
            fileQuestions = fileContent.split('\n').map(q => q.trim()).filter(q => q.length > 0);
            console.log(`Loaded ${fileQuestions.length} questions.`);
        } else {
            console.error(`File NOT found at: ${questionsPath}`);
        }
    } catch (e) { console.error("Error reading questions file:", e); }

    if (existingInterest) {
        // FORCE UPDATE
        existingInterest.questions = fileQuestions;
        await existingInterest.save();

        const token = existingInterest.uniqueToken;
        const link = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/interview/${token}`;
        return { link, user, interview: existingInterest, token };
    }

    // New Interview
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    const interview = new Interview({
        candidateId,
        jobId,
        uniqueToken: token,
        questions: fileQuestions,
        expiresAt,
        status: 'pending',
        title: `AI Interview for ${job.title}`
    });

    await interview.save();

    const link = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/interview/${token}`;
    return { link, user, interview, token };
};

export const scheduleInterview = async (req, res) => {
    try {
        const { candidateId, jobId } = req.body;
        if (!candidateId || !jobId) return sendError(res, 'Missing IDs', null, 400);

        const { link, interview, token, expiresAt } = await createInterviewInternal(candidateId, jobId);
        console.log(`[EMAIL MOCK] Sending interview link: ${link}`);

        sendSuccess(res, 'Interview scheduled', { interviewId: interview._id, token, link });
    } catch (error) {
        console.error('Schedule error:', error);
        sendError(res, 'Failed to schedule', null, 500);
    }
};

export const getInterviewByToken = async (req, res) => {
    try {
        const { token } = req.params;
        const interview = await Interview.findOne({ uniqueToken: token }).populate('jobId', 'title company');

        if (!interview) return sendError(res, 'Invalid token', null, 404);
        if (new Date() > new Date(interview.expiresAt)) return sendError(res, 'Expired link', null, 410);
        if (interview.status === 'completed') return sendError(res, 'Already completed', null, 400);

        sendSuccess(res, 'Details retrieved', {
            questions: interview.questions,
            jobTitle: interview.jobId.title,
            company: interview.jobId.company,
            expiresAt: interview.expiresAt
        });
    } catch (error) {
        sendError(res, 'Server error', null, 500);
    }
};

export const submitInterview = async (req, res) => {
    try {
        const { token } = req.body;
        if (!req.file) return sendError(res, 'No recording uploaded', null, 400);

        const interview = await Interview.findOne({ uniqueToken: token });
        if (!interview) return sendError(res, 'Interview not found', null, 404);

        // Move file to AI folder storage
        // backend/src/controllers -> ../../../ai/static/recordings
        const targetDir = path.resolve(__dirname, '../../../ai/static/recordings');

        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        const fileName = `interview_${interview._id}.webm`;
        const targetPath = path.join(targetDir, fileName);

        // Assuming multer saved it to 'uploads/interviews' or similar temp
        // We need to move it. 
        // Note: req.file.path is the current temp path
        fs.renameSync(req.file.path, targetPath);

        console.log(`Recording saved to: ${targetPath}`);

        interview.recordingVideoPath = targetPath;
        interview.status = 'completed';
        await interview.save();

        sendSuccess(res, 'Interview submitted', { filePath: targetPath });

    } catch (error) {
        console.error('Submit error:', error);
        sendError(res, 'Failed to submit', null, 500);
    }
};
