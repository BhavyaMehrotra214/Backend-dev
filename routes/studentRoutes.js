const express = require('express')
const router = express.Router()
const Student = require('../models/Student')


router.post('/add', async (req, res) => {
  try {
    const student = await Student.create(req.body)
    res.status(201).json(student)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const students = await Student.find()
    res.json(students)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})


router.get('/:email', async (req, res) => {
  try {
    const student = await Student.findOne({ email: req.params.email })

    if (!student) {
      return res.status(404).json({ message: 'Student not found' })
    }

    res.json(student)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.put('/:email', async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { email: req.params.email },
      { gpa: req.body.gpa },
      { new: true }
    )

    if (!student) {
      return res.status(404).json({ message: 'Student not found' })
    }

    res.json(student)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})


router.delete('/:email', async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({ email: req.params.email })

    if (!student) {
      return res.status(404).json({ message: 'Student not found' })
    }

    res.json({ message: 'Deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router