
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Job from './src/models/Job.js';

// Load env vars
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const debugJobs = async () => {
    // Default DB only (since fix_deadlines worked there)
    await mongoose.connect(process.env.MONGODB_URI);
    const jobs = await Job.find({}).lean();
    console.log(`\n--- CHECKING JOB STATUS (Count: ${jobs.length}) ---`);
    if (jobs.length === 0) console.log("NO JOBS FOUND.");

    jobs.forEach(j => {
        console.log(`Title: "${j.title}" | Status: "${j.status}" | Deadline: ${j.deadline}`);
    });

    await mongoose.connection.close();
};
// Removed logJobs helper usage for clarity
// debugJobs();

debugJobs();
