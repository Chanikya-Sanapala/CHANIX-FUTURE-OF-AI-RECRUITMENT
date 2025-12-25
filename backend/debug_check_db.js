import mongoose from 'mongoose';

const uri = "mongodb+srv://dasariharikrishna01_db_user:NPysZDsuMJtAEnwn@cluster0.pcjtqzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectionSchema = new mongoose.Schema({
    requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
}, { timestamps: true });

const Connection = mongoose.model('Connection', connectionSchema);

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    userType: String
});

const User = mongoose.model('User', userSchema);

const checkDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to DB');

        const connections = await Connection.find({});
        console.log(`Total Connections Found: ${connections.length}`);

        for (const c of connections) {
            const reqUser = await User.findById(c.requester);
            const resUser = await User.findById(c.recipient);

            console.log(`\nConnection ID: ${c._id}`);
            console.log(`Status: ${c.status}`);
            console.log(`Requester: ${c.requester} -> ${reqUser ? reqUser.firstName : 'NOT FOUND'}`);
            console.log(`Recipient: ${c.recipient} -> ${resUser ? resUser.firstName : 'NOT FOUND'}`);
        }

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

checkDB();
