require('dotenv').config()
require("./config/database").connect()

const express = require('express')
const app = express()

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))