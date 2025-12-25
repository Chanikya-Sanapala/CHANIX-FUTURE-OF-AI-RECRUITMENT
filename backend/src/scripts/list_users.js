
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../../.env') });

const UserSchema = new mongoose.Schema({ email: String, userType: String });
const User = mongoose.model('User', UserSchema);

const listUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const recruiters = await User.find({ userType: 'recruiter' }).limit(3);
        const seekers = await User.find({ userType: 'jobseeker' }).limit(3);

        console.log('--- Recruiters ---');
        recruiters.forEach(r => console.log(r.email, r._id));

        console.log('--- Job Seekers ---');
        seekers.forEach(s => console.log(s.email, s._id));

        process.exit(0);
    } catch (err) { console.error(err); process.exit(1); }
};

listUsers();
