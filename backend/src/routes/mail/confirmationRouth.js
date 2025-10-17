const confirmEmail = async (req, res) => {
  const { token } = req.params;

  try {
    const decoded = jwt.verify(token, 'secretkey');
    const user = await User.findById(decoded.userId);

    if (!user) return res.status(404).send('User not found');

    if (user.isVerified) return res.status(400).send('Email already verified');

    user.isVerified = true;
    await user.save();

    res.send('Email successfully verified. You can now log in.');
  } catch (err) {
    res.status(400).send('Invalid or expired token');
  }
};
