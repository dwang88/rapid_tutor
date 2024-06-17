const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  rate: { type: Number, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Tutor', tutorSchema);
