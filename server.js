require('dotenv').config()
require('./src/config/database').connect()
require('http-errors')

const errorHandler = require('./src/errorHandler/apiErrorHandler')
const routes = require('./src/routes/index')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use('/api', routes)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port: ${port}`))