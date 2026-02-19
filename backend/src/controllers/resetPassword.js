import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import User from '../models/User.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


const router = express.Router()
dotenv.config()

const generateResetToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  })
}
// const app = express();
// app.use(cors());
// Request password reset route
// router.post('/request-password-reset',
export const resetPassword = async (req, res) => {
  try {

    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ message: 'User not found' })

    const token = generateResetToken(user)
    const frontendUrl = (process.env.FRONTEND_URL || 'http://localhost:3000').replace(/\/$/, '');
    const resetLink = `${frontendUrl}/ResetPassword?token=${token}&UserId=${user._id}`


    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: process.env.PORT_EMAIL,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Send reset email 
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Password Reset Request',
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    })

    res
      .status(200)
      .json({ message: 'Password reset email sent. Please check your inbox.' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// router.post('/reset-password'
export const changePassword = async (req, res) => {

  const { token, newPassword } = req.body
  if (!token) return res.status(400).json({ message: 'Token is required' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.id)
    if (!user) return res.status(404).json({ message: 'User not found' })

    // Update password
    user.password = newPassword
    await user.save()

    res.status(200).json({ message: 'Password has been reset successfully' })
  } catch (error) {
    res.status(400).json({ message: 'Invalid or expired token' })
  }
}


export const updatePassword = async (req, res) => {
  const { userId, token, password } = req.body;

  if (!userId || !token || !password) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    // Find user by ID and token
    const user = await User.findOne({
      _id: userId,
      // resetPasswordToken: token,
      // resetPasswordExpires: { $gt: Date.now() }, // token is not expired
    });


    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid or expired token." });
    }

    // Hash new password manually since we are using updateOne (bypassing pre-save hook)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Use updateOne to bypass generic document validation (e.g., missing firstName)
    await User.updateOne(
      { _id: userId },
      {
        $set: {
          password: hashedPassword
        },
        $unset: {
          resetPasswordToken: 1,
          resetPasswordExpires: 1
        }
      }
    );

    console.log("Password updated for user:", userId);
    res.json({ success: true, message: "Password updated successfully!" });
  } catch (err) {
    console.error("Reset Password Error:", err);
    res.status(500).json({ success: false, message: err.message || "Server error." });
  }
}