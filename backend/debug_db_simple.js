
import mongoose from 'mongoose';
import User from './src/models/User.js';
import Application from './src/models/Application.js';

const MONGODB_URI = 'mongodb+srv://sanapalachanikya_db_user:Chanikya%40123@cluster0.zh4m9a3.mongodb.net/?appName=Cluster0';

async function run() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected.');

        const users = await User.find().lean();
        console.log('USERS:');
        users.forEach(u => console.log(`${u._id} | ${u.email}`));

        const apps = await Application.find().sort({ createdAt: -1 }).limit(10).lean();
        console.log('APPS:');
        apps.forEach(a => console.log(`${a._id} | Job:${a.job} | Applicant:${a.applicant}`));

    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.disconnect();
    }
}

run();
