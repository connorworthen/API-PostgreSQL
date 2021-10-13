const verify = require('../middleware/verifyToken')
const albumRoutes  = require('./albumRoutes/albumRoutes')
const express = require('express')
const albumRouter = express.Router()
albumRouter.use(verify)

// Get all Albums
albumRouter.use('/albums', albumRoutes)

// Get all one specific
// router.get('/:id', verify, albumController)

// Create Album
// albumRouter.post('/', verify, albumController.createAlbum)

// Update an Album
// router.patch('/:id', verify, albumController)

// Delete an Album
// router.delete('/:id', verify, albumController)

module.exports = albumRouter