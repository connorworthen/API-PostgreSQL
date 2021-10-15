const albumRoutes  = require('./albumRoutes/albumRoutes')
const authRoutes = require('./authRoutes/authRoutes')
const userRoutes = require('./userRoutes/users')
const songRoutes = require('./songRoutes/songRoutes')
const artistRoutes = require('./artistRoutes/artistRoutes')

const verify = require('../middleware/verifyToken')
const express = require('express')
const verifyRouter = express.Router()
verifyRouter.use(verify)

const authRouter = express.Router()

authRouter.use('/register', authRoutes)

authRouter.use('/login', authRoutes)

verifyRouter.use('/users', userRoutes)

verifyRouter.use('/albums', albumRoutes)

verifyRouter.use('/songs', songRoutes)

verifyRouter.use('/artists', artistRoutes)

module.exports = [
    authRouter,
    verifyRouter
]
