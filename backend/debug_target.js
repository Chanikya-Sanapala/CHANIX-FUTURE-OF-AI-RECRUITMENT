
import mongoose from 'mongoose';
import User from './src/models/User.js';
import Application from './src/models/Application.js';

const MONGODB_URI = 'mongodb+srv://sanapalachanikya_db_user:Chanikya%40123@cluster0.zh4m9a3.mongodb.net/?appName=Cluster0';

async function run() {
    try {
        await mongoose.connect(MONGODB_URI);

        // Get last application
        const app = await Application.findOne().sort({ createdAt: -1 }).lean();
        if (!app) { console.log('No apps'); return; }

        console.log(`LAST_APP_ID: ${app._id}`);
        console.log(`APPLICANT_FIELD_VALUE: "${app.applicant}"`);
        console.log(`APPLICANT_FIELD_TYPE: ${typeof app.applicant}`);

        // Check if this matches a user
        const userById = await User.findById(app.applicant);
        console.log(`MATCHED_USER_BY_ID: ${userById ? userById.email : 'None'}`);

        const userByEmail = await User.findOne({ email: app.applicant });
        console.log(`MATCHED_USER_BY_EMAIL: ${userByEmail ? userByEmail._id : 'None'}`);

    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.disconnect();
    }
}

run();
