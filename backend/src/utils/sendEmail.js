import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendEmail = async (options) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or use host/port if not gmail
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"AI Smart Engine" <${process.env.EMAIL_USER}>`,
            to: options.email,
            subject: options.subject,
            html: options.message, // applicationRoutes passes 'message' as HTML
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: %s", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        // Don't throw, just log, so flow doesn't break if email fails
    }
};

export default sendEmail;