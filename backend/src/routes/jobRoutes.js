import express from 'express';
import { sendSuccess, sendError } from '../utils/responseHandler.js';
import Job from '../models/Job.js';

// Temporary in-memory store so the recruiter dashboard can work without a Job model
const router = express.Router();

// GET /api/jobs?recruiterId=...
router.get('/', async (req, res) => {
  try {
    const {
      recruiterId,
      q,
      location,
      jobType,
      minSalary,
      maxSalary,
      sort = 'newest',
      page = 1,
      limit = 10,
    } = req.query;

    const numericPage = Math.max(1, parseInt(page, 10) || 1);
    const numericLimit = Math.max(1, Math.min(100, parseInt(limit, 10) || 10));

    const query = {};

    if (recruiterId) {
      // recruiterId is stored as a simple string on Job documents
      query.recruiterId = String(recruiterId);
    } else {
      // For public listing (Job Seekers), show all Active jobs (ignore deadline)
      query.status = 'Active';
      // query.deadline = { $gte: new Date() }; 
    }

    if (q) {
      const regex = new RegExp(q, 'i');
      query.$or = [
        { title: regex },
        { company: regex },
        { description: regex },
        { location: regex },
      ];
    }

    if (location) {
      query.location = new RegExp(location, 'i');
    }

    if (jobType) {
      query.jobType = jobType;
    }

    if (minSalary || maxSalary) {
      const salaryFilter = {};
      if (minSalary) salaryFilter.$gte = Number(minSalary);
      if (maxSalary) salaryFilter.$lte = Number(maxSalary);
      query.maxSalary = salaryFilter;
    }

    let sortOption = { createdAt: -1 };
    if (sort === 'oldest') sortOption = { createdAt: 1 };
    if (sort === 'salary-high') sortOption = { maxSalary: -1 };
    if (sort === 'salary-low') sortOption = { maxSalary: 1 };

    const total = await Job.countDocuments(query);
    const jobs = await Job.find(query)
      .sort(sortOption)
      .skip((numericPage - 1) * numericLimit)
      .limit(numericLimit)
      .lean();

    return sendSuccess(res, 'Jobs fetched successfully', jobs, 200, {
      total,
      page: numericPage,
      limit: numericLimit,
    });
  } catch (error) {
    return sendError(res, 'Failed to fetch jobs', error.message || error, 500);
  }
});

// GET /api/jobs/:id - get single job with full details
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).lean();
    if (!job) {
      return sendError(res, null, 'Job not found', 404);
    }
    return sendSuccess(res, 'Job fetched successfully', job);
  } catch (error) {
    return sendError(res, 'Failed to fetch job', error.message || error, 500);
  }
});

// POST /api/jobs  - create a new job (placeholder implementation)
router.post('/', async (req, res) => {
  try {
    const payload = req.body || {};

    let deadline = undefined;
    if (payload.deadline) {
      deadline = new Date(payload.deadline);
      // Set to end of the day so it doesn't expire immediately if "today" is picked
      deadline.setHours(23, 59, 59, 999);
    }

    const job = await Job.create({
      title: payload.title,
      company: payload.company,
      description: payload.description,
      skillsRequired: payload.skillsRequired || [],
      experience: payload.experience,
      location: payload.location,
      jobType: payload.jobType,
      salary: payload.salary,
      minSalary: payload.minSalary,
      maxSalary: payload.maxSalary,
      deadline: deadline,
      postedDate: payload.postedDate,
      urgent: !!payload.urgent,
      featured: !!payload.featured,
      customQuestions: Array.isArray(payload.customQuestions) ? payload.customQuestions.filter(q => q.question) : [],
      recruiterId: payload.recruiterId || null,
      status: payload.status || 'Active',
    });

    return sendSuccess(res, 'Job created successfully', job, 201);
  } catch (error) {
    console.error('Create Job Error:', error);
    return sendError(res, 'Failed to create job', error.message || error, 500);
  }
});

// PUT /api/jobs/:id - update existing job
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;

    let deadline = undefined;
    if (payload.deadline) {
      deadline = new Date(payload.deadline);
      deadline.setHours(23, 59, 59, 999);
    }

    const updatedData = {
      title: payload.title,
      company: payload.company,
      description: payload.description,
      skillsRequired: payload.skillsRequired || [],
      experience: payload.experience,
      location: payload.location,
      jobType: payload.jobType,
      salary: payload.salary,
      minSalary: payload.minSalary,
      maxSalary: payload.maxSalary,
      deadline: deadline || payload.deadline, // keep old if not sent? ideally frontend sends it
      status: payload.status,
      // merged customQuestions logic if needed, simplify for now
    };

    // Remove undefined keys
    Object.keys(updatedData).forEach(key => updatedData[key] === undefined && delete updatedData[key]);

    const job = await Job.findByIdAndUpdate(id, updatedData, { new: true });
    if (!job) return sendError(res, 'Job not found', null, 404);

    return sendSuccess(res, 'Job updated successfully', job);
  } catch (error) {
    return sendError(res, 'Failed to update job', error.message || error, 500);
  }
});

// PATCH /api/jobs/:id/status - update status only (Close/Open)
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // Active, Closed, Draft

    if (!['Active', 'Closed', 'Draft'].includes(status)) {
      return sendError(res, 'Invalid status', null, 400);
    }

    const job = await Job.findByIdAndUpdate(id, { status }, { new: true });
    if (!job) return sendError(res, 'Job not found', null, 404);

    return sendSuccess(res, 'Job status updated', job);
  } catch (error) {
    return sendError(res, 'Failed to update job status', error.message || error, 500);
  }
});

export default router;
