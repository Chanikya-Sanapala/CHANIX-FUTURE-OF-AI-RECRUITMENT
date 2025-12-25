
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import path from 'path';

// Fix for windows path resolution
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../../.env') });

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    userType: String,
    lockUntil: Date,
    loginAttempts: Number,
    isActive: Boolean
});

const User = mongoose.model('User', UserSchema);

const debug = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error('MONGODB_URI is undefined. Check .env');
        }

        console.log('Connecting to MongoDB...');
        await mongoose.connect(mongoUri);
        console.log('Connected.');

        const email = 'eraggattapuhemanth2@gmail.com';
        const user = await User.findOne({ email });

        if (!user) {
            console.log('❌ User not found:', email);
            process.exit(0);
        }

        console.log('\n--- User Layout ---');
        console.log('Email:', user.email);
        console.log('UserType:', user.userType);
        console.log('IsActive:', user.isActive);
        console.log('LoginAttempts:', user.loginAttempts);
        console.log('LockUntil:', user.lockUntil);

        console.log('\n--- Password Check ---');
        const inputPass = 'Hemanth@123';
        const isMatch = await bcrypt.compare(inputPass, user.password);
        console.log(`Input: "${inputPass}"`);
        console.log(`Stored Hash: ${user.password.substring(0, 20)}...`);
        console.log(`Match Result: ${isMatch ? '✅ MATCH' : '❌ NO MATCH'}`);

        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
};

debug();
