import Application from '../models/Application.js';
import Job from '../models/Job.js';
import User from '../models/User.js';
import sendEmail from './sendEmail.js';
import { createInterviewInternal } from '../controllers/interviewController.js';

const checkAndSendEmails = async () => {
    try {
        const now = new Date();
        // Find applications where scheduled time has passed and email hasn't been sent
        const pendingApps = await Application.find({
            scheduledEmailAt: { $lte: now },
            emailSent: false
        }).populate('job'); // We need job details

        if (pendingApps.length === 0) return;

        console.log(`[SCHEDULER] Found ${pendingApps.length} pending emails.`);

        for (const app of pendingApps) {
            try {
                const job = app.job;
                if (!job) {
                    console.error(`[SCHEDULER] Job not found for application ${app._id}`);
                    continue;
                }

                const applicant = await User.findById(app.applicant);
                if (!applicant || !applicant.email) {
                    console.error(`[SCHEDULER] Applicant not found for application ${app._id}`);
                    continue;
                }

                const score = app.matchScore || 0;
                // Logic: Score < 75 => Rejected (already set in DB mostly, but we re-check logic if needed)
                // Actually status is already set in DB during creation. We just notify based on status/score.

                if (score < 65) {
                    // Rejection Email
                    await sendEmail({
                        email: applicant.email,
                        subject: 'Application Update: ' + job.title,
                        message: `
                        <div style="font-family: Arial, sans-serif; padding: 20px;">
                            <h2>Application Status Update</h2>
                            <p>Dear Candidate,</p>
                            <p>Thank you for your interest in the <b>${job.title}</b> position at <b>${job.company}</b>.</p>
                            <p>After reviewing your resume against our requirements, we regret to inform you that we will not be proceeding with your application at this time as your profile does not meet our minimum matching criteria (Score: ${score}%).</p>
                            <p>We encourage you to apply for other openings that match your skills.</p>
                            <br>
                            <p>Best Regards,</p>
                            <p><b>Smart Engine Team</b></p>
                        </div>
                    `
                    });
                    console.log(`[SCHEDULER] Sent rejection email to ${applicant.email} for job ${job.title}`);

                } else {
                    // Acceptance / Interview Email
                    // We need to generate the interview link now if it wasn't generated before? 
                    // Or we utilize the existing interview controller logic.
                    // Since we are delaying feedback, we should probably schedule the interview OR send the link now.
                    // Let's create the interview NOW.

                    // Note: If we want to be safe, we check if interview exists. 
                    // But createInterviewInternal usually handles creation.

                    try {
                        // We can't easily check for existing interview without importing model, relying on controller to handle "get or create" or just create.
                        const { link, user } = await createInterviewInternal(app.applicant, job._id);

                        await sendEmail({
                            email: applicant.email,
                            subject: 'Congratulations! You are Shortlisted for an AI Interview',
                            message: `
                    <div style="font-family: Arial, sans-serif; padding: 20px;">
                        <h1 style="color: #2e7d32;">Congratulations!</h1>
                        <p>We are pleased to inform you that you have been <b>shortlisted</b> for the <b>${job.title}</b> position.</p>
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
                        console.log(`[SCHEDULER] Sent interview email to ${applicant.email} for job ${job.title}`);
                    } catch (err) {
                        console.error(`[SCHEDULER] Failed to schedule interview/email for ${applicant.email}:`, err);
                    }
                }

                // Mark as sent
                app.emailSent = true;
                await app.save();

            } catch (innerErr) {
                console.error(`[SCHEDULER] Error processing app ${app._id}:`, innerErr);
            }
        }

    } catch (error) {
        console.error('[SCHEDULER] Error in check loop:', error);
    }
};

export const startScheduler = () => {
    console.log('⏰ Scheduler started. Checking for pending emails every 60 seconds.');
    // Check immediately on startup
    checkAndSendEmails();
    // Check every 60 seconds
    setInterval(checkAndSendEmails, 60 * 1000);
};

export default startScheduler;
