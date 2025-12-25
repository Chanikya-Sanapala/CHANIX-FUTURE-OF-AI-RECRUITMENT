
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../../.env') });

const UserSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.model('User', UserSchema);

const fixData = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        await mongoose.connect(mongoUri);
        console.log('Connected.');

        const email = 'eraggattapuhemanth2@gmail.com';

        // Set a dummy First Name to satisfy schema validation
        const result = await User.updateOne(
            { email },
            {
                $set: {
                    firstName: 'Hemanth',
                    lastName: 'Recruiter'
                }
            }
        );

        console.log('Data Fix Result:', result);
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

fixData();
