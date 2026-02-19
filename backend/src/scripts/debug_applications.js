
import mongoose from 'mongoose';
import Application from '../models/Application.js';
import User from '../models/User.js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const debugApps = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');

        const apps = await Application.find({}).limit(20);
        console.log(`Total Applications found (limit 20): ${apps.length}`);

        for (const app of apps) {
            console.log(`App ID: ${app._id}, Applicant: ${app.applicant} (Type: ${typeof app.applicant}), Job: ${app.job}, Status: ${app.status}`);

            // Allow string ID or ObjectId
            const userId = app.applicant;
            if (mongoose.Types.ObjectId.isValid(userId)) {
                const user = await User.findById(userId);
                console.log(`   -> Linked User: ${user ? user.email : 'NOT FOUND'}`);
            } else {
                const user = await User.findOne({ email: userId });
                console.log(`   -> Linked User (via Email): ${user ? user.email : 'NOT FOUND'}`);
            }
        }

        const users = await User.find({}).limit(5);
        console.log('\nSample Users:');
        for (const u of users) {
            console.log(`User ID: ${u._id}, Email: ${u.email}`);
        }

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

debugApps();
