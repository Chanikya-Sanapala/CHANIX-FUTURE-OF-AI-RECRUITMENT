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

    const query = { status: 'Active' };

    if (recruiterId) {
      // recruiterId is stored as a simple string on Job documents
      query.recruiterId = String(recruiterId);
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
      deadline: payload.deadline,
      postedDate: payload.postedDate,
      urgent: !!payload.urgent,
      featured: !!payload.featured,
      customQuestions: Array.isArray(payload.customQuestions) ? payload.customQuestions : [],
      recruiterId: payload.recruiterId || null,
      status: payload.status || 'Active',
    });

    return sendSuccess(res, 'Job created successfully', job, 201);
  } catch (error) {
    return sendError(res, 'Failed to create job', error.message || error, 500);
  }
});

export default router;
