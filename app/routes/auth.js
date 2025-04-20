const express = require('express');
const passport = require('passport');
const User = require('../models/User');

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err });
  }
});

// Login route
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).json({ message: 'User logged in successfully' });
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'User logged out successfully' });
});

module.exports = router;
