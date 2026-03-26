const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

const advancedRoutes = require('./routes/advancedRoutes')

app.use('/advanced', advancedRoutes)

app.listen(3000, () => {
  console.log('Server running on port 3000')
})