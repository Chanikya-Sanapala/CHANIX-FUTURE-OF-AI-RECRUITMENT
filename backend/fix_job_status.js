
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Job from './src/models/Job.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

const fixStatus = async () => {
    await connectDB();
    try {
        // Find all jobs. Update them to ensure Active status.
        const jobs = await Job.find({});
        console.log(`Found ${jobs.length} jobs. Updating status...`);

        let count = 0;
        for (const job of jobs) {
            if (!job.status || job.status !== 'Active') {
                job.status = 'Active';
                // Also ensure deadline is set (just in case)
                if (!job.deadline) {
                    const d = new Date();
                    d.setDate(d.getDate() + 30);
                    job.deadline = d;
                }
                await job.save();
                count++;
                console.log(`Updated "${job.title}" status to Active`);
            }
        }

        console.log(`\nSuccessfully updated status for ${count} jobs.`);
    } catch (error) {
        console.error('Update failed:', error);
    } finally {
        mongoose.connection.close();
    }
};

fixStatus();
