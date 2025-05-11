const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  service: String,
  message: String,
  budget: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Enquiry', enquirySchema);
