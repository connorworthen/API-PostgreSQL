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

//register user

// Get all one specific
verifyRouter.get('/:id', albumRoutes)

// Create Album
verifyRouter.post('/albums', albumRoutes)

// Update an Album
verifyRouter.patch('/:id', verify, albumRoutes)

// Delete an Album
// router.delete('/:id', verify, albumController)

module.exports = [
    verifyRouter,
    authRouter
]
