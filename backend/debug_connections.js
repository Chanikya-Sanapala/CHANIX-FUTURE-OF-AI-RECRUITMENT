import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Connection from './src/models/Connection.js';
import User from './src/models/User.js';

dotenv.config();

const debugConnections = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        const connections = await Connection.find({});
        console.log(`Found ${connections.length} connections:`);

        for (const conn of connections) {
            const requester = await User.findById(conn.requester);
            const recipient = await User.findById(conn.recipient);
            console.log('------------------------------------------------');
            console.log(`ID: ${conn._id}`);
            console.log(`Status: ${conn.status}`);
            console.log(`Requester: ${requester ? requester.firstName + ' (' + requester._id + ')' : 'UNKNOWN (' + conn.requester + ')'}`);
            console.log(`Recipient: ${recipient ? recipient.firstName + ' (' + recipient._id + ')' : 'UNKNOWN (' + conn.recipient + ')'}`);
            console.log('------------------------------------------------');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

debugConnections();
