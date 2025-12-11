const mongoose = require('mongoose');
const { Schema } = mongoose;

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/smart-engine-db";

const applicationSchema = new Schema({
    job: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
    applicant: { type: String, trim: true },
    status: { type: String, enum: ['Applied', 'Interview', 'Rejected', 'Hired'], default: 'Applied' },
    coverLetter: { type: String },
    customAnswers: [{ questionId: String, answer: String }],
    matchScore: { type: Number, default: 0 },
    appliedDate: { type: Date, default: Date.now },
}, { timestamps: true });

const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);

// Dummy Job Schema just for ref
const jobSchema = new Schema({
    title: String,
    recruiterId: String
});
const Job = mongoose.models.Job || mongoose.model('Job', jobSchema);

async function verify() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to DB");

        // 1. Create a dummy job
        const job = await Job.create({ title: "Test Job for Score", recruiterId: "rec123" });
        console.log("Job created:", job._id);

        // 2. Create an application with a score
        const score = 88;
        const app = await Application.create({
            job: job._id,
            applicant: "user123",
            matchScore: score,
            status: 'Applied'
        });
        console.log("Application created with score:", app.matchScore);

        // 3. Verify it was saved
        const savedApp = await Application.findById(app._id);
        if (savedApp.matchScore === score) {
            console.log("SUCCESS: Match Score saved correctly.");
        } else {
            console.error("FAILURE: Match Score NOT saved. Found:", savedApp.matchScore);
            process.exit(1);
        }

        // Cleanup
        await Application.deleteOne({ _id: app._id });
        await Job.deleteOne({ _id: job._id });
        console.log("Cleanup done.");

        process.exit(0);

    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}

verify();
