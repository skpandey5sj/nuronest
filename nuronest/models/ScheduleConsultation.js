const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  name: String,
  email: String,
  service: String,
  date: String,
  time: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ScheduleConsultation', scheduleSchema);
