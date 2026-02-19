
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars from backend root
dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

import Application from '../src/models/Application.js';
import User from '../src/models/User.js';

const run = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to DB');

        const fs = await import('fs');
        let output = '';
        output += 'Connected to DB\n';

        const users = await User.find({}).lean();
        output += '--- USERS ---\n';
        users.forEach(u => {
            output += `ID: ${u._id}, Name: ${u.firstName} ${u.lastName}, Email: ${u.email}\n`;
        });

        const apps = await Application.find({}).lean();
        output += '\n--- APPLICATIONS ---\n';
        apps.forEach(a => {
            output += `AppID: ${a._id}, JobID: ${a.job}, Applicant: "${a.applicant}" (Type: ${typeof a.applicant}), Status: ${a.status}\n`;
        });

        output += `\nTotal Users: ${users.length}\n`;
        output += `Total Applications: ${apps.length}\n`;

        fs.writeFileSync('debug_output.txt', output);
        console.log('Written to debug_output.txt');

    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
};

run();
