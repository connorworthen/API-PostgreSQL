require('dotenv').config()
require("./config/database").connect()

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// Import Routes
const authRoutes = require('./routes/auth')

const subscribersRouter = require('./routes/subscribers')

const usersRouter = require('./routes/users')

// Routes Middleware
app.use('/api/user', authRoutes)

app.use('/users', usersRouter)

app.use('/subscribers', subscribersRouter)

//

app.listen(port, () => console.log(`Server started on port: ${port}`))