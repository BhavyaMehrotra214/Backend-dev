const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/universitydb')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))


const courseRoutes = require('./routes/courseRoutes')
const professorRoutes = require('./routes/professorRoutes')
const gradeRoutes = require('./routes/gradeRoutes')


app.use('/courses', courseRoutes)
app.use('/professors', professorRoutes)
app.use('/grades', gradeRoutes)

app.listen(3000, () => {
  console.log('Server running on port 3000')
})