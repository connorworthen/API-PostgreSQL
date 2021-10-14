const albumRoutes  = require('./albumRoutes/albumRoutes')
const authRoutes = require('./authRoutes/authRoutes')
const verify = require('../middleware/verifyToken')
const express = require('express')
const verifyRouter = express.Router()
verifyRouter.use(verify)
const authRouter = express.Router()

// Register User
authRouter.use('/register', authRoutes)

// Login User
authRouter.use('/login', authRoutes)

// Get all Albums
verifyRouter.use('/albums', albumRoutes)

module.exports = [
    verifyRouter,
    authRouter
]
