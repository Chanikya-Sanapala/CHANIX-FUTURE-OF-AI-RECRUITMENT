
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

const fixDeadlines = async () => {
    await connectDB();
    try {
        const jobs = await Job.find({ deadline: { $exists: true, $ne: null } });
        console.log(`Found ${jobs.length} jobs with deadlines. Updating...`);

        let count = 0;
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 30); // Extend by 30 days
        futureDate.setHours(23, 59, 59, 999);

        for (const job of jobs) {
            job.deadline = futureDate;
            await job.save();
            count++;
            console.log(`Updated "${job.title}" deadline to ${futureDate.toISOString()}`);
        }

        console.log(`\nSuccessfully updated ${count} jobs.`);
    } catch (error) {
        console.error('Update failed:', error);
    } finally {
        mongoose.connection.close();
    }
};

fixDeadlines();
