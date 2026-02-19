
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const run = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI not found');
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB Connected');

        // We need to define schema inline or import. Importing failed last time maybe?
        // Let's define inline to be safe and independent.
        const appSchema = new mongoose.Schema({ applicant: String, job: Object }, { strict: false });
        const Application = mongoose.model('Application', appSchema);

        const userSchema = new mongoose.Schema({ email: String, firstName: String }, { strict: false });
        const User = mongoose.model('User', userSchema);

        const apps = await Application.find({});
        console.log(`Found ${apps.length} applications`);

        const users = await User.find({});
        console.log(`Found ${users.length} users`);

        if (apps.length > 0) {
            console.log('First 5 apps:');
            for (const a of apps.slice(0, 5)) {
                console.log(JSON.stringify(a, null, 2));
            }
        }

        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

run();
