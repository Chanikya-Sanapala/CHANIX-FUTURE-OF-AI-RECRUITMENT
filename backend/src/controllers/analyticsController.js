import Job from '../models/Job.js';
import Application from '../models/Application.js';
import Interview from '../models/Interview.js';
import User from '../models/User.js';

export const getRecruiterPerformance = async (req, res) => {
    try {
        const recruiterId = req.user._id;

        // Time range filter (default: last 30 days)
        const { range } = req.query;
        let startDate = new Date();
        if (range === 'week') startDate.setDate(startDate.getDate() - 7);
        else if (range === 'month') startDate.setMonth(startDate.getMonth() - 1);
        else if (range === 'quarter') startDate.setMonth(startDate.getMonth() - 3);
        else if (range === 'year') startDate.setFullYear(startDate.getFullYear() - 1);
        else startDate.setMonth(startDate.getMonth() - 1); // Default month

        // 1. Leaderboard Metrics
        // ----------------------------------------------------

        // Resumes Sourced (Total Applications for Recruiter's Jobs)
        const jobs = await Job.find({ recruiterId }).select('_id');
        const jobIds = jobs.map(job => job._id);

        const totalResumes = await Application.countDocuments({
            job: { $in: jobIds },
            createdAt: { $gte: startDate }
        });

        // Submittals (Screening > Interviews)
        // Assuming 'Shortlisted' or 'Interviewing' implies submittal to hiring manager/client stage
        const submittals = await Application.countDocuments({
            job: { $in: jobIds },
            status: { $in: ['Shortlisted', 'Interview Scheduled', 'Interviewing'] },
            updatedAt: { $gte: startDate }
        });

        // Interviews Scheduled
        const interviewsScheduled = await Interview.countDocuments({
            jobId: { $in: jobIds },
            createdAt: { $gte: startDate }
        });

        // Offers Closed (Hired)
        const offersClosed = await Application.countDocuments({
            job: { $in: jobIds },
            status: 'Hired',
            updatedAt: { $gte: startDate }
        });


        // 2. Activity Trends (Daily Breakdown)
        // ----------------------------------------------------
        const dateFormat = range === 'year' ? "%Y-%m" : "%Y-%m-%d";

        const activityTrends = await Application.aggregate([
            {
                $match: {
                    job: { $in: jobIds },
                    createdAt: { $gte: startDate }
                }
            },
            {
                $group: {
                    _id: { $dateToString: { format: dateFormat, date: "$createdAt" } },
                    resumes: { $sum: 1 },
                    interviews: {
                        $sum: {
                            $cond: [{ $in: ["$status", ["Interview Scheduled", "Interviewing"]] }, 1, 0]
                        }
                    },
                    offers: {
                        $sum: {
                            $cond: [{ $eq: ["$status", "Hired"] }, 1, 0]
                        }
                    }
                }
            },
            { $sort: { _id: 1 } }
        ]);


        // 3. Efficiency Metrics
        // ----------------------------------------------------

        // Time to Fill (Avg days from Job posted to first Hired status)
        // This is complex, simplified to: Avg days active for closed jobs
        const closedJobs = await Job.find({
            recruiterId,
            status: 'Closed',
            updatedAt: { $gte: startDate }
        });

        let totalDays = 0;
        closedJobs.forEach(job => {
            const start = new Date(job.createdAt);
            const end = new Date(job.updatedAt);
            const diffTime = Math.abs(end - start);
            totalDays += Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        });
        const avgTimeToFill = closedJobs.length ? Math.round(totalDays / closedJobs.length) : 0;

        // Interview to Offer Ratio
        const offersRatio = interviewsScheduled > 0 ? ((offersClosed / interviewsScheduled) * 100).toFixed(1) : 0;


        // 4. Client Feedback (Mock Data for now as no Client model explicitly linked with ratings yet)
        // ----------------------------------------------------
        const clientFeedback = {
            rating: 4.8,
            reviews: 24,
            sentiment: { positive: 85, neutral: 10, negative: 5 }
        };


        res.status(200).json({
            success: true,
            data: {
                leaderboard: {
                    resumesSourced: totalResumes,
                    submittals: submittals,
                    interviewsScheduled: interviewsScheduled,
                    offersClosed: offersClosed
                },
                trends: activityTrends.map(t => ({
                    date: t._id,
                    resumes: t.resumes,
                    interviews: t.interviews,
                    offers: t.offers
                })),
                efficiency: {
                    timeToFill: avgTimeToFill,
                    interviewToOfferRatio: offersRatio
                },
                feedback: clientFeedback
            }
        });

    } catch (error) {
        console.error('Analytics Error:', error);
        res.status(500).json({ success: false, message: 'Server Error fetching analytics' });
    }
};
