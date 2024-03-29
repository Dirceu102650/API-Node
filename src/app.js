const express = require('express')
const app = express()
const cors = require('cors')
/**
 * Rotas
 */
const index = require('./routes/index')
const personRoute = require('./routes/personRoute')

app.use(cors())
app.use('/', index)
app.use(express.json())
app.use('/person', personRoute)
app.use(express.urlencoded({ extended: true }))

module.exports = app
