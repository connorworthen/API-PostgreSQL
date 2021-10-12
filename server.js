require('dotenv').config()
require("./config/database").connect()

const express = require('express')
const app = express()
const port = 3000

//Middleware
app.use(express.json())

// Import Routes
const authRoutes = require('./routes/auth')

const postRoutes = require('./routes/posts')

const subscribersRouter = require('./routes/subscribers')

// Routes Middleware
app.use('/api/user', authRoutes)

app.use('/api/posts', postRoutes)

app.use('/subscribers', subscribersRouter)

//
app.listen(port, () => console.log(`Server started on port: ${port}`))