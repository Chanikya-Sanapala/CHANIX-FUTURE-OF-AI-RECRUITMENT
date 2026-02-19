import mongoose from 'mongoose';
import axios from 'axios';
import fs from 'fs';
import User from './src/models/User.js';
import JobSeekerProfile from './src/models/JobSeekerProfile.js';
import Job from './src/models/Job.js';
import Application from './src/models/Application.js';

// Configuration
const MONGODB_URI = process.env.MONGODB_URI || 'your_mongodb_uri_here';
const BACKEND_URL = 'http://localhost:5000/api/applications';
const RESUME_PATH = 'uploads/dummy_resume.txt'; // Relative to backend root

async function runVerification() {
    console.log('🚀 Starting Verification...');

    try {
        // 1. Connect to DB
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // 2. Create Test User
        const testEmail = `test_${Date.now()}@example.com`;
        const user = await User.create({
            username: 'TestUser',
            email: testEmail,
            password: 'Password@123',
            userType: 'Job Seeker'
        });
        console.log(`✅ Created Test User: ${user._id}`);

        // 3. Create Test Profile with Resume
        // Ensure resume file exists
        if (!fs.existsSync(RESUME_PATH)) {
            throw new Error(`Resume file not found at ${RESUME_PATH}`);
        }

        await JobSeekerProfile.create({
            userId: user._id,
            resume: {
                fileName: 'dummy_resume.txt',
                filePath: RESUME_PATH
            }
        });
        console.log('✅ Created Test Profile with Resume');

        // 4. Test Case A: High Match Score
        console.log('\n--- 🧪 Test Case A: High Match Score ---');
        const highMatchJob = await Job.create({
            title: 'Java Developer',
            company: 'Test Corp',
            description: 'Looking for a Java Developer with Spring Boot, React, and MongoDB experience. Microservices and REST APIs required. CI/CD and Docker skills preferred.',
            // Add required fields
            recruiterId: new mongoose.Types.ObjectId(), // Fake info
            location: 'Remote',
            jobType: 'Full-time',
            experience: '2-5 years',
            skillsRequired: ['Java', 'Spring'],
            salary: '100000',
            deadline: new Date(),
            postedDate: new Date()
        });
        console.log(`Created Job (High Match): ${highMatchJob._id}`);

        try {
            const res = await axios.post(BACKEND_URL, {
                jobId: highMatchJob._id,
                applicantId: user._id,
                coverLetter: 'I am a great fit!'
            });
            console.log('✅ High Score Application Response:', res.status, res.data.success ? 'SUCCESS' : 'FAILED');
            if (res.data.success && res.data.data.matchScore >= 75) {
                console.log('   MATCH SCORE:', res.data.data.matchScore);
                console.log('   Result: PASS (Allowed)');
            } else {
                console.log('   Result: FAIL (Unexpected outcome)');
                console.log('   Data:', JSON.stringify(res.data, null, 2));
            }
        } catch (e) {
            console.error('❌ High Score Request Failed:', e.response ? e.response.data : e.message);
        }


        // 5. Test Case B: Low Match Score
        console.log('\n--- 🧪 Test Case B: Low Match Score ---');
        const lowMatchJob = await Job.create({
            title: 'Accountant',
            company: 'Finance Inc',
            description: 'Looking for a Senior Accountant. Must know GAAP, QuickBooks, and Tax Law. CPA required. Finance degree needed. No coding skills required.',
            // Add required fields
            recruiterId: new mongoose.Types.ObjectId(),
            location: 'Remote',
            jobType: 'Full-time',
            experience: '5 years',
            skillsRequired: ['Accounting'],
            salary: '80000',
            deadline: new Date(),
            postedDate: new Date()
        });
        console.log(`Created Job (Low Match): ${lowMatchJob._id}`);

        try {
            const res = await axios.post(BACKEND_URL, {
                jobId: lowMatchJob._id,
                applicantId: user._id,
                coverLetter: 'I want this job.'
            });

            // We expect this to be successful API call (200 OK) but success: false in body
            if (res.data.success === false && res.data.data.blocksApplication) {
                console.log('✅ Low Score Application Response: BLOCKED (As Expected)');
                console.log('   MATCH SCORE:', res.data.data.score);
                console.log('   SUGGESTIONS:', res.data.data.suggestions.length);
                console.log('   Result: PASS (Blocked)');
            } else {
                console.log('❌ Unexpected Response for Low Score:');
                console.log(JSON.stringify(res.data, null, 2));
                console.log('   Result: FAIL');
            }

        } catch (e) {
            console.error('❌ Low Score Request Failed (Network/Server error):', e.response ? e.response.data : e.message);
        }

        // Cleanup
        console.log('\n--- 🧹 Cleanup ---');
        await User.findByIdAndDelete(user._id);
        await JobSeekerProfile.findOneAndDelete({ userId: user._id });
        await Job.findByIdAndDelete(highMatchJob._id);
        await Job.findByIdAndDelete(lowMatchJob._id);
        await Application.deleteMany({ applicant: user._id });
        console.log('✅ Database Cleaned Up');

    } catch (err) {
        console.error('❌ Verification Script Error:', err);
    } finally {
        await mongoose.disconnect();
        console.log('👋 Done');
    }
}

runVerification();
