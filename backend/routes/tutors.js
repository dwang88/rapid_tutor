const express = require('express');
const router = express.Router();
const Tutor = require('../models/Tutor'); // Assuming you have a Tutor model defined

// Get all tutors
router.get('/', async (req, res) => {
  try {
    const tutors = await Tutor.find();
    res.json(tutors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
