const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
  gpa: Number,
  courses: [String]
}, { timestamps: true })

module.exports = mongoose.model('Student', studentSchema)