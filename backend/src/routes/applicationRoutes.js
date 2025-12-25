import express from 'express';
import { sendSuccess, sendError } from '../utils/responseHandler.js';
import Application from '../models/Application.js';
import Job from '../models/Job.js';
import JobSeekerProfile from '../models/JobSeekerProfile.js';
import User from '../models/User.js';

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

    // 1. Get List of Job IDs & Applicant IDs
    const jobIds = Array.from(new Set(docs.map(d => d.job).filter(Boolean).map(String)));
    const applicantIds = Array.from(new Set(docs.map(d => d.applicant).filter(Boolean).map(String)));

    // 2. Fetch Jobs
    const jobs = await Job.find({ _id: { $in: jobIds } }).lean();
    const jobsById = jobs.reduce((acc, job) => { acc[String(job._id)] = job; return acc; }, {});

    // 3. Fetch Users (for Names and Phone)
    const users = await User.find({ _id: { $in: applicantIds } }).select('firstName lastName email phoneNumber').lean();
    const usersById = users.reduce((acc, usr) => { acc[String(usr._id)] = usr; return acc; }, {});

    // 4. Fetch Profiles (for Resumes, Skills, Experience)
    const profiles = await JobSeekerProfile.find({ userId: { $in: applicantIds } }).select('userId resume skills experience').lean();
    const profilesByUserId = profiles.reduce((acc, prof) => { acc[String(prof.userId)] = prof; return acc; }, {});

    const data = docs.map(app => {
      const job = app.job ? jobsById[String(app.job)] : null;
      const applicantUser = app.applicant ? usersById[String(app.applicant)] : null;
      const applicantProfile = app.applicant ? profilesByUserId[String(app.applicant)] : null;

      const fullName = applicantUser
        ? `${applicantUser.firstName || ''} ${applicantUser.lastName || ''}`.trim() || applicantUser.email
        : 'Unknown Candidate';

      const phone = applicantUser?.phoneNumber || 'N/A';

      // Calculate experience manually or use a helper since virtuals might not be available in lean() without execPopulate or similar, 
      // but simpler to just re-calc here for list view.
      let experienceYears = 0;
      if (applicantProfile?.experience) {
        let totalMonths = 0;
        applicantProfile.experience.forEach(exp => {
          if (exp.startDate) {
            const start = new Date(exp.startDate);
            const end = exp.isCurrentJob ? new Date() : (exp.endDate ? new Date(exp.endDate) : new Date());
            totalMonths += (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
          }
        });
        experienceYears = Math.max(0, Math.round((totalMonths / 12) * 10) / 10);
      }

      const skillsList = applicantProfile?.skills?.map(s => s.skillName).join(', ') || 'N/A';

      const resumeLink = applicantProfile?.resume?.filePath
        ? `/uploads/${applicantProfile.resume.fileName || 'resume'}`
        : null;

      let finalResumeLink = null;
      if (applicantProfile?.resume?.filePath) {
        const parts = applicantProfile.resume.filePath.split(/[/\\]/);
        const fileName = parts[parts.length - 1];
        finalResumeLink = `${process.env.BACKEND_URL || 'http://localhost:5000'}/uploads/${fileName}`;
      }

      return {
        ...app,
        job: job ? { title: job.title, _id: job._id } : null,
        applicant: {
          _id: applicantUser?._id,
          fullName,
          email: applicantUser?.email,
          phone,
          resume: { filePath: finalResumeLink },
          skills: skillsList,
          experience: `${experienceYears} Years`
        }
      };
    });
    sendSuccess(res, 'Applications fetched successfully', data, 200);
  } catch (error) {
    sendError(res, 'Failed to fetch applications', error.message || error, 500);
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

    if (jobDoc.deadline && new Date(jobDoc.deadline) < new Date()) {
      return sendError(res, 'This job has expired and is no longer accepting applications.', null, 400);
    }

    const profileDoc = await JobSeekerProfile.findOne({ userId: applicantId }).lean();
    if (!profileDoc || !profileDoc.resume || !profileDoc.resume.filePath) {
      return sendError(res, 'No resume found on your profile. Please upload a resume first.', null, 400);
    }

    // Fetch User to get email
    const userDoc = await User.findById(applicantId).lean();
    const userEmail = userDoc ? userDoc.email : '';

    // Check if already applied
    const existingApp = await Application.findOne({ job: jobId, applicant: applicantId });
    if (existingApp) {
      return sendError(res, 'You have already applied for this job.', null, 409);
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

      const { spawn } = await import('child_process');
      const scriptPath = path.join(process.cwd(), '..', 'ai', 'resume_matchmaker2.py');

      const args = [
        scriptPath,
        tempJdPath,
        resumeAbsPath
      ];

      // Pass user email if authentic
      if (userEmail) {
        args.push('--email');
        args.push(userEmail);
      }

      const python = spawn('python', args);

      let output = "";
      let errorOutput = "";

      await new Promise((resolve, reject) => {
        python.stdout.on("data", (data) => { output += data.toString(); });
        python.stderr.on("data", (data) => { errorOutput += data.toString(); });

        python.on("close", (code) => {
          if (code === 0) {
            resolve();
          } else {
            reject(new Error(errorOutput || "Python script failed"));
          }
        });
      });

      // Cleanup temp JD file
      fs.unlinkSync(tempJdPath);

      // Parse CLI Output
      // Example output: "📊 Match Score: 85.0% ..."
      const scoreMatch = output.match(/Match Score:\s*([\d\.]+)%/);
      const score = scoreMatch ? parseFloat(scoreMatch[1]) : 0;

      const missingMatch = output.match(/Missing \(from JD focus set\):\s*\n\s*(.*?)(?=\n\n|\n💡|\n=|$)/s);
      const missingText = missingMatch ? missingMatch[1].trim() : "";
      const suggestions = (missingText && missingText !== "—") ? missingText.split(',').map(s => s.trim()) : [];

      // Logic: Score < 75 => Rejected but SAVED
      // Logic: Score >= 75 => Applied

      const isLowScore = score < 75;
      const status = isLowScore ? 'Rejected' : 'Applied';

      // 4. Create Application (Save regardless of score)
      const app = await Application.create({
        job: jobId,
        applicant: applicantId,
        status: status,
        coverLetter: coverLetter || '',
        customAnswers: customAnswers || [],
        matchScore: score
      });

      if (isLowScore) {
        // Send "Not Shortlisted" email
        try {
          const sendEmail = (await import('../utils/sendEmail.js')).default;
          if (sendEmail && userEmail) {
            await sendEmail({
              email: userEmail,
              subject: 'Application Update: ' + jobDoc.title,
              message: `
                        <div style="font-family: Arial, sans-serif; padding: 20px;">
                            <h2>Application Status Update</h2>
                            <p>Dear Candidate,</p>
                            <p>Thank you for your interest in the <b>${jobDoc.title}</b> position at <b>${jobDoc.company}</b>.</p>
                            <p>After reviewing your resume against our requirements, we regret to inform you that we will not be proceeding with your application at this time as your profile does not meet our minimum matching criteria (Score: ${score}%).</p>
                            <p>We encourage you to apply for other openings that match your skills.</p>
                            <br>
                            <p>Best Regards,</p>
                            <p><b>Smart Engine Team</b></p>
                        </div>
                    `
            });
            console.log('[EMAIL] Sent rejection email.');
          }
        } catch (e) {
          console.error("Failed to send rejection email:", e);
        }

        return res.status(200).json({
          success: false,
          message: 'Application not submitted due to low match score.',
          data: {
            blocksApplication: true,
            score: score,
            suggestions: suggestions,
            details: { output },
            applicationId: app._id // Return ID so frontend could potentialy use it
          }
        });
      }

      const data = {
        _id: app._id,
        jobId: app.job,
        applicantId: app.applicant,
        status: app.status,
        matchScore: app.matchScore,
        appliedDate: app.appliedDate
      };

      // AUTOMATIC INTERVIEW TRIGGER
      // If score is high enough (applied), schedule the interview immediately
      if (!isLowScore) {
        try {
          // Dynamic import to avoid circular dependency issues if any
          const { createInterviewInternal } = await import('../controllers/interviewController.js');
          const { link, user } = await createInterviewInternal(applicantId, jobId);
          console.log(`[AUTO-TRIGGER] AI Interview scheduled for ${user.email}. Link: ${link}`);

          // Try to send real email if sendEmail util exists
          try {
            const sendEmail = (await import('../utils/sendEmail.js')).default;
            if (sendEmail) {
              await sendEmail({
                email: user.email,
                subject: 'Congratulations! You are Shortlisted for an AI Interview',
                message: `
                    <div style="font-family: Arial, sans-serif; padding: 20px;">
                        <h1 style="color: #2e7d32;">Congratulations!</h1>
                        <p>We are pleased to inform you that you have been <b>shortlisted</b> for the <b>${jobDoc.title}</b> position.</p>
                        <p>Based on your resume match score (${score}%), we would like to invite you to an AI-based interview round.</p>
                        <p>Please complete your AI Interview within 24 hours using the link below:</p>
                        <br>
                        <a href="${link}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Start Interview Now</a>
                        <br><br>
                        <p>Or copy this link: ${link}</p>
                        <br>
                        <p>Good luck!</p>
                        <p><b>Smart Engine Team</b></p>
                    </div>
                `
              });
              console.log('[EMAIL] Sent real email to candidate.');
            }
          } catch (emailErr) {
            console.error("Failed to send real email, falling back to mock log:", emailErr);
          }

          // Attach link to response so frontend can show it if needed
          data.interviewLink = link;

        } catch (interviewErr) {
          console.error("Failed to auto-schedule interview:", interviewErr);
        }
      }

      return sendSuccess(res, 'Application submitted successfully', data, 201);

    } catch (aiError) {
      console.error('AI Matchmaker Error:', aiError.message);
      // Log error to file for debugging
      try {
        const fs = await import('fs');
        const path = await import('path');
        const logPath = path.join(process.cwd(), 'backend_ai_error.log');
        fs.appendFileSync(logPath, `[${new Date().toISOString()}] ${aiError.message}\n`);
      } catch (e) { console.error('Failed to write error log', e); }

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

// Toggle "Save" status for an application
router.patch('/:id/save', async (req, res) => {
  try {
    const { id } = req.params;
    const { isSaved } = req.body;

    const application = await Application.findByIdAndUpdate(
      id,
      { isSaved },
      { new: true }
    );

    if (!application) {
      return sendError(res, 'Application not found', null, 404);
    }

    return sendSuccess(res, 'Application updated', application);
  } catch (error) {
    return sendError(res, 'Failed to update application', error.message || error, 500);
  }
});

export default router;
