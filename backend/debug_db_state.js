
import mongoose from 'mongoose';
import User from './src/models/User.js';
import Application from './src/models/Application.js';

const MONGODB_URI = 'mongodb+srv://sanapalachanikya_db_user:Chanikya%40123@cluster0.zh4m9a3.mongodb.net/?appName=Cluster0';

async function run() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        console.log('\n--- USERS ---');
        const users = await User.find().lean();
        users.forEach(u => console.log(`ID: ${u._id}, Email: ${u.email}`));

        console.log('\n--- APPLICATIONS ---');
        const apps = await Application.find().sort({ createdAt: -1 }).limit(10).lean();
        apps.forEach(a => {
            console.log(`App ID: ${a._id}`);
            console.log(`- Job: ${a.job}`);
            console.log(`- Applicant Field: "${a.applicant}"`);
            console.log(`- Created At: ${a.createdAt}`);
        });

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
    }
}

run();
