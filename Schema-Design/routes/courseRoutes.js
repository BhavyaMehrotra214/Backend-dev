const express = require('express')
const router = express.Router()
const Course = require('../models/Course')

router.post('/add', async (req, res) => {
  try {
    const course = await Course.create(req.body)
    res.json(course)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().populate('prerequisites')
    res.json(courses)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router