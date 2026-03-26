const express = require('express')
const router = express.Router()
const Professor = require('../models/Professor')

router.post('/add', async (req, res) => {
  try {
    const professor = await Professor.create(req.body)
    res.json(professor)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const professors = await Professor.find()
    res.json(professors)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router