const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const register = async (req, res) => {
  const { email, password } = req.body;

  // 1. Save user to DB (set isVerified: false)
  const user = await User.create({ email, password, isVerified: false });

  // 2. Create a verification token (expires in 1h)
  const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });

  // 3. Send confirmation email
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or another provider
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_email_password_or_app_password',
    },
  });

  const backendUrl = (process.env.BACKEND_URL || 'http://localhost:5000').replace(/\/$/, '');
  const verificationLink = `${backendUrl}/api/auth/confirm/${token}`;

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: email,
    subject: 'Email Confirmation',
    html: `<p>Click to confirm your email: <a href="${verificationLink}">Verify Email</a></p>`,
  };

  await transporter.sendMail(mailOptions);

  res.status(200).json({ message: 'Registration successful. Please check your email to confirm.' });
};
