const express = require('express')
const router = express.Router()

const Student = require('../models/Student')
const Grade = require('../models/Grade')

router.get('/avg-gpa', async (req, res) => {
  try {
    const result = await Student.aggregate([
      {
        $group: {
          _id: "$department",
          avgGPA: { $avg: "$gpa" }
        }
      }
    ])
    res.json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/popular-courses', async (req, res) => {
  try {
    const result = await Student.aggregate([
      { $unwind: "$courses" },
      {
        $group: {
          _id: "$courses",
          totalStudents: { $sum: 1 }
        }
      },
      { $sort: { totalStudents: -1 } }
    ])
    res.json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/performance-report', async (req, res) => {
  try {
    const result = await Grade.aggregate([
      {
        $lookup: {
          from: "students",
          localField: "student",
          foreignField: "_id",
          as: "studentDetails"
        }
      },
      { $unwind: "$studentDetails" },

      {
        $lookup: {
          from: "courses",
          localField: "course",
          foreignField: "_id",
          as: "courseDetails"
        }
      },
      { $unwind: "$courseDetails" },

      {
        $project: {
          studentName: "$studentDetails.name",
          courseName: "$courseDetails.name",
          grade: 1
        }
      }
    ])

    res.json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router