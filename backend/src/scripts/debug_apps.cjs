
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const run = async () => {
    try {
        const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/smart-engine'; // Fallback
        console.log('Connecting to:', uri);
        await mongoose.connect(uri);
        console.log('Connected.');

        // Define loose schemas to read whatever is there
        const App = mongoose.model('Application', new mongoose.Schema({ applicant: String, job: mongoose.Schema.Types.Mixed }, { strict: false }));
        const User = mongoose.model('User', new mongoose.Schema({ email: String, firstName: String }, { strict: false }));

        const apps = await App.find({}).sort({ createdAt: -1 }).limit(10);
        console.log(`Total Apps found: ${apps.length}`);

        apps.forEach(a => {
            console.log(`App ID: ${a._id}`);
            console.log(`  Applicant (Raw): ${a.applicant} (Type: ${typeof a.applicant})`);
            console.log(`  Job: ${a.job}`);
            console.log('---');
        });

        const users = await User.find({}).limit(5);
        console.log(`Total Users found (sample): ${users.length}`);
        users.forEach(u => {
            console.log(`User ID: ${u._id}`);
            console.log(`  Email: ${u.email}`);
        });

        process.exit(0);
    } catch (e) {
        console.error('Error:', e);
        process.exit(1);
    }
};

run();
