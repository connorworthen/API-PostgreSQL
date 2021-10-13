const router = require('express').Router();
const albumController = require('../../controllers/albumController/albumController')

// Get all Albums
router.get('/', albumController)

// Get all one specific
router.get('/:id', albumController)

// Create Album
router.post('/', albumController)

// Update an Album
router.patch('/:id', albumController)

// Delete an Album
router.delete('/:id', albumController)