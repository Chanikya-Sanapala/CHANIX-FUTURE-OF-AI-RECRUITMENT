import express from 'express';
import { sendSuccess, sendError } from '../utils/responseHandler.js';
import Application from '../models/Application.js';
import Job from '../models/Job.js';
import JobSeekerProfile from '../models/JobSeekerProfile.js';

const router = express.Router();

// GET /api/applications
// Optional: filter by jobId or recruiter; for now returns empty list so UI can render
router.get('/', async (req, res) => {
  try {
    const { jobId, applicantId } = req.query;

    const query = {};
    if (jobId) query.job = jobId;
    if (applicantId) query.applicant = applicantId;

    const docs = await Application.find(query).sort({ createdAt: -1 }).lean();

    // Load related jobs in one go to avoid N+1 queries
    const jobIds = Array.from(new Set(
      docs
        .map(d => d.job)
        .filter(Boolean)
        .map(id => String(id))
    ));

    const jobs = jobIds.length
      ? await Job.find({ _id: { $in: jobIds } }).lean()
      : [];

    const jobsById = jobs.reduce((acc, job) => {
      acc[String(job._id)] = job;
      return acc;
    }, {});

    const data = docs.map(app => {
      const job = app.job ? jobsById[String(app.job)] : null;

      return {
        _id: app._id,
        status: app.status,
        matchScore: app.matchScore || 0,
        appliedDate: app.appliedDate,
        coverLetter: app.coverLetter,
        customAnswers: app.customAnswers || [],
        applicant: app.applicant ? { userId: app.applicant } : null,
        job: job
          ? {
            _id: job._id,
            title: job.title,
            company: job.company,
            customQuestions: job.customQuestions || [],
          }
          : null,
      };
    });

    return sendSuccess(res, 'Applications fetched successfully', data, 200);
  } catch (error) {
    return sendError(res, 'Failed to fetch applications', error.message || error, 500);
  }
});

// POST /api/applications - create a new application
router.post('/', async (req, res) => {
  try {
    const { jobId, applicantId, coverLetter = '', customAnswers = [] } = req.body || {};

    if (!jobId) return sendError(res, 'jobId is required', null, 400);

    // 1. Fetch Job and Applicant Profile to get files/text
    const jobDoc = await Job.findById(jobId).lean();
    if (!jobDoc) return sendError(res, 'Job not found', null, 404);

    const profileDoc = await JobSeekerProfile.findOne({ userId: applicantId }).lean();
    if (!profileDoc || !profileDoc.resume || !profileDoc.resume.filePath) {
      return sendError(res, 'No resume found on your profile. Please upload a resume first.', null, 400);
    }

    // 2. Prepare files for Matchmaker Service
    //    We need to send the actual files. Since they are on disk/uploads, we read them.
    //    Ideally, we should stream them, but for MVP we might read into buffer or stream file.
    try {
      const fs = await import('fs');
      const path = await import('path');
      const axios = (await import('axios')).default;
      const FormData = (await import('form-data')).default;

      // Resolve absolute paths
      // Ensure we strip leading slash so it's treated as relative to process.cwd()
      const relativePath = profileDoc.resume.filePath.replace(/^[\/\\]/, '');
      const resumeAbsPath = path.resolve(process.cwd(), relativePath);

      // For JD, we might not have a file, but the Matchmaker accepts text too? 
      // The current python matchmaker expects FILES (PDF/DOCX). 
      // Wait, api_server.py endpoint `match_resume` takes `jd: UploadFile` and `resume: UploadFile`.
      // The Job model has `description` (text). We can create a temporary text file for JD content 
      // OR we can adjust the python server. But user said "goahead" with the plan which implied 
      // whatever integration is needed. 
      // Let's create a temporary text file for the JD description to send as a file.

      const tempJdPath = path.resolve(process.cwd(), 'temp', `jd_${jobId}_${Date.now()}.txt`);
      if (!fs.existsSync(path.dirname(tempJdPath))) {
        fs.mkdirSync(path.dirname(tempJdPath), { recursive: true });
      }
      fs.writeFileSync(tempJdPath, jobDoc.description || jobDoc.title || 'No description');

      const formData = new FormData();
      formData.append('resume', fs.createReadStream(resumeAbsPath));
      formData.append('jd', fs.createReadStream(tempJdPath));
      formData.append('topk', 35);
      formData.append('fuzzy', 85);

      // 3. Call Matchmaker Service
      // Assuming AI service is on port 8000
      const matchResponse = await axios.post('http://127.0.0.1:8000/api/match', formData, {
        headers: {
          ...formData.getHeaders()
        }
      });

      // Cleanup temp JD file
      fs.unlinkSync(tempJdPath);

      const matchResult = matchResponse.data;
      const score = matchResult.score || 0;
      const suggestions = matchResult.missing || []; // matchmaker returns 'missing' list which we can use as suggestions logic

      // Logic: Score < 75 => BLOCK
      if (score < 75) {
        // Add custom suggestions from the matchmaker result + our static ones if needed
        // matchmaker output has 'missing' (list of missing keywords)
        // We can format these better.

        return res.status(200).json({
          success: false,
          message: 'Application not submitted due to low match score.',
          data: {
            blocksApplication: true,
            score: score,
            suggestions: suggestions,
            details: matchResult
          }
        });
      }

      // If Score      // 4. Create Application
      const app = await Application.create({
        job: jobId,
        applicant: applicantId, // Storing Profile ID reference if needed, or User ID. Schema says String.
        status: 'Applied',
        coverLetter: coverLetter || '',
        customAnswers: customAnswers || [],
        matchScore: score // Save the score
      });

      const data = {
        _id: app._id,
        jobId: app.job,
        applicantId: app.applicant,
        status: app.status,
        appliedDate: app.appliedDate,
        matchScore: score
      };

      return sendSuccess(res, 'Application created successfully!', data, 201);

    } catch (aiError) {
      console.error('AI Matchmaker Error:', aiError.message);
      // Fallback: If AI fails, do we block or allow?
      // "Matchmaker needs to pass...". If it fails, maybe allow for now or return error?
      // Let's return error so user knows something is wrong, or maybe allow "Manual Review"?
      // For this requirement enforcing score, if AI is down, we probably can't check score.
      return sendError(res, 'Resume analysis service is currently unavailable. Please try again later.', aiError.message, 503);
    }

  } catch (error) {
    return sendError(res, 'Failed to create application', error.message || error, 500);
  }
});

// PATCH /api/applications/:id - update application status (placeholder)
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body || {};

  const updated = {
    _id: id,
    status: status || 'Pending',
  };

  return sendSuccess(res, 'Application updated (placeholder)', updated, 200);
});

export default router;
