
import mongoose from 'mongoose';
import Application from './src/models/Application.js';

const MONGODB_URI = 'mongodb+srv://sanapalachanikya_db_user:Chanikya%40123@cluster0.zh4m9a3.mongodb.net/?appName=Cluster0';

async function run() {
    try {
        await mongoose.connect(MONGODB_URI);
        const app = await Application.findOne().sort({ createdAt: -1 }).lean();
        if (app) {
            console.log('APPLICANT:' + app.applicant);
        } else {
            console.log('NO_APPS');
        }
    } catch (e) { console.error(e); }
    finally { await mongoose.disconnect(); }
}
run();
