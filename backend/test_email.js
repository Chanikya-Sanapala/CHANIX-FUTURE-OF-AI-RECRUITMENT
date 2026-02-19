
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const testEmail = async () => {
    console.log("Testing email with user:", process.env.EMAIL_USER);
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: `"Chanix Test" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Send to self
            subject: "Test Email from Smart Engine",
            text: "If you receive this, email configuration is working!",
        });

        console.log("Email sent successfully:", info.messageId);
    } catch (error) {
        console.error("Email failed:", error);
    }
};

testEmail();
