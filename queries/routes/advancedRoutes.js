const express = require('express')
const router = express.Router()
const Student = require('../models/Student')



router.get('/gpa-range', async (req, res) => {
  try {
    const students = await Student.find({
      gpa: { $gte: 3.0, $lte: 3.5 }
    })
    res.json(students)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})



router.get('/more-courses', async (req, res) => {
  try {
    const students = await Student.find({
      $expr: { $gt: [{ $size: "$courses" }, 5] }
    })
    res.json(students)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})



router.get('/top-students', async (req, res) => {
  try {
    const students = await Student.find()
      .sort({ gpa: -1 })
      .limit(10)

    res.json(students)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})


router.get('/count-by-city', async (req, res) => {
  try {
    const result = await Student.aggregate([
      {
        $group: {
          _id: "$city",
          totalStudents: { $sum: 1 }
        }
      }
    ])
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router