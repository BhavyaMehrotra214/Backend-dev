const express = require('express')
const router = express.Router()
const Grade = require('../models/Grade')

router.post('/add', async (req, res) => {
  try {
    const grade = await Grade.create(req.body)
    res.json(grade)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const grades = await Grade.find()
      .populate('student')
      .populate('course')

    res.json(grades)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router