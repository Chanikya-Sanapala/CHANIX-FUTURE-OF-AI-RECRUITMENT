import mongoose from 'mongoose';

const uri = "mongodb+srv://dasariharikrishna01_db_user:NPysZDsuMJtAEnwn@cluster0.pcjtqzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectionSchema = new mongoose.Schema({
    requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String }
}, { timestamps: true });

const Connection = mongoose.model('Connection', connectionSchema);

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    userType: String
});
const User = mongoose.model('User', userSchema);

const run = async () => {
    await mongoose.connect(uri);

    console.log("=== USERS ===");
    const users = await User.find({});
    users.forEach(u => console.log(`${u._id} | ${u.firstName} ${u.lastName} | ${u.email} | ${u.userType}`));

    console.log("\n=== CONNECTIONS ===");
    const conns = await Connection.find({});
    conns.forEach(c => console.log(`${c._id} | ${c.requester} -> ${c.recipient} | ${c.status}`));

    process.exit();
};

run();
