const albumRoutes  = require('./albumRoutes/albumRoutes')
const authRoutes = require('./authRoutes/authRoutes')
const songRoutes = require('./songRoutes/songRoutes')

const verify = require('../middleware/verifyToken')
const express = require('express')
const verifyRouter = express.Router()
verifyRouter.use(verify)

const authRouter = express.Router()

authRouter.use('/register', authRoutes)

authRouter.use('/login', authRoutes)

verifyRouter.use('/albums', albumRoutes)

verifyRouter.use('/songs', songRoutes)

module.exports = [
    verifyRouter,
    authRouter
]
