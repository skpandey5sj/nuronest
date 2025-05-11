const express = require('express');
const router = express.Router();
const ScheduleConsultation = require('../models/ScheduleConsultation');

router.post('/', async (req, res) => {
  try {
    const schedule = new ScheduleConsultation(req.body);
    await schedule.save();
    res.status(201).json({ message: 'Consultation scheduled successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to schedule consultation' });
  }
});

module.exports = router;
