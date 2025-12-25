
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../../.env') });

const UserSchema = new mongoose.Schema({
    email: String,
    loginAttempts: Number,
    lockUntil: Date
});

const User = mongoose.model('User', UserSchema);

const unlock = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        await mongoose.connect(mongoUri);
        console.log('Connected to DB.');

        const email = 'eraggattapuhemanth2@gmail.com';
        const result = await User.updateOne(
            { email },
            {
                $set: { loginAttempts: 0 },
                $unset: { lockUntil: 1 }
            }
        );

        console.log('Unlock Result:', result);
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

unlock();
