
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../../.env') });

const JobSchema = new mongoose.Schema({
    title: String,
    deadline: Date,
    status: { type: String, default: 'Active' }
}, { strict: false });

const Job = mongoose.model('Job', JobSchema);

const runTest = async () => {
    try {
        // 1. Connect
        if (!process.env.MONGODB_URI) throw new Error("No Mongo URI");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB");

        // 2. Create Expired Job
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        const job = await Job.create({
            title: "Test Expired Job",
            deadline: yesterday,
            company: "Test Co",
        });
        console.log("Created Job:", job._id);

        // 3. Hit API
        const response = await fetch('http://localhost:5005/api/applications', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                jobId: job._id,
                applicantId: new mongoose.Types.ObjectId() // Random ID
            })
        });

        const data = await response.json();
        console.log("Response Status:", response.status);
        console.log("Response Message:", data.message);

        // 4. Validate
        let success = false;
        if (response.status === 400 && data.message && data.message.includes('expired')) {
            console.log("✅ TEST PASSED: Application blocked for expired job.");
            success = true;
        } else {
            console.log("❌ TEST FAILED: Did not get expected 400 expired error.");
        }

        // 5. Cleanup
        await Job.deleteOne({ _id: job._id });
        console.log("Cleanup done.");

        process.exit(success ? 0 : 1);

    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

runTest();
