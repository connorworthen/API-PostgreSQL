const albumRoutes  = require('./albumRoutes/albumRoutes')
const authRoutes  = require('./authRoutes/authRoutes')
const express = require('express')
const verifyRouter = express.Router()
const authRouter = express.Router()


// Get all Albums
verifyRouter.use('/albums', albumRoutes)

//register user
authRouter.use('/register', authRoutes)

// Get all one specific
// router.get('/:id', verify, albumController)

// Create Album
// albumRouter.post('/', verify, albumController.createAlbum)

// Update an Album
// router.patch('/:id', verify, albumController)

// Delete an Album
// router.delete('/:id', verify, albumController)

module.exports = [
    verifyRouter,
    authRouter
]
