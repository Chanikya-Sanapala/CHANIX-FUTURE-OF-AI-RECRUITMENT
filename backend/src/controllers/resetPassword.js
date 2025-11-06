import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import User from '../models/User.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

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
    const resetLink = `http://localhost:${process.env.PORT}/auth/reset-password?token=${token}`


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
    
    // Send reset email <a href="${resetLink}">here</a> And 
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Password Reset Request',
      html: `<p>Click <a href="http://localhost:3000/ResetPassword?token=${token}&UserId=${user._id}">click</a> to reset your password.</p>`,
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
      try {
        const { userId, currentPassword, newPassword } = req.body 
      
        // const { id } = req.params;
    // console.log("Received ID:", id); // 👈 log it
        const user = await User.findById(userId)
        console.log("User found:", user); // 👈 log it
        if (!user) return res.status(404).json({ message: 'User not found' })
        const isMatch = await user.comparePassword(currentPassword)
        if (!isMatch) return res.status(401).json({ message: 'Current password is incorrect' })

        user.password = newPassword
        await user.save()

        res.status(200).json({ message: 'Password has been updated successfully' })
      } catch (error) {
        res.status(500).json({ message: error.message })
      }
    }