require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { rsort } = require('semver')
//const bodyParser = require('body-parser')

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/annotations', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const annotationsRouter = require('./routes/annotations')
app.use('/annotations',annotationsRouter)


app.listen(process.env.PORT || 3000, () => console.log('Server Started'))

