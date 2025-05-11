const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

router.post('/', async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json({ message: 'Enquiry saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save enquiry' });
  }
});

module.exports = router;
