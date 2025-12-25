
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Interview from './src/models/Interview.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const verifyToken = async () => {
    // Check both DBs just in case
    console.error("Starting verification...");
    await checkDB(process.env.MONGODB_URI);
    await checkDB(process.env.MONGODB_URI, 'smart-engine');
    console.error("Verification complete.");
};

const checkDB = async (uri, dbName = undefined) => {
    try {
        await mongoose.connect(uri, { dbName });
        console.log(`\nChecked DB: ${dbName || 'default'}`);

        const token = 'e9f919fd4d9b5129fdbef8da5706369292b64e3e955d79f8fff5e5c24bf7ddab';
        const interview = await Interview.findOne({ uniqueToken: token }).populate('jobId');

        if (interview) {
            console.log('FOUND INTERVIEW:');
            console.log(`Job: ${interview.title}`);
            console.log(`Expires: ${interview.expiresAt}`);
            console.log(`Status: ${interview.status}`);
            console.log(`Questions: ${interview.questions.length}`);
        } else {
            console.log('Token NOT found in this DB.');
        }

    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
}

verifyToken();
