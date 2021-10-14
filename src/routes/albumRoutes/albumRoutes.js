const { allAlbumsService, createAlbumService, oneAlbumService, patchAlbumService, deletedAlbumService } = require("../../services/albumService")
const newAlbumService = require("../../middleware/albumValidation")
const express = require('express')
const router = express.Router()
// const Album = require('../../models/albumModel/album')

// Get all Albums
router.get('/', async (req, res) => {
    try {
        const albums = await allAlbumsService()
        return res.status(201).send({albums})
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
})

// Get One Album
router.get('/:id', async (req, res) => {
    const album = await oneAlbumService(req.params.id)
    try {
        return res.status(201).send({album})
    } catch (err) {
        return res.status(400).json({ message: 'Failed to get album' })
    }
})

// Create Albums
router.post('/', async (req, res) => {
    const {albumName, albumTracks} = req.body
    const validateData = await newAlbumService(req.body)
    if (validateData.error) {
        return res.status(400).json({message: 'Failed to create album'})
    } else {
        const newAlbum = await createAlbumService(albumName, albumTracks)
        return res.status(201).send({newAlbum})
    }
})

// Update Album
router.patch('/:id', async (req, res) => {
    const updatedAlbum = req.body
    const patchedData = await patchAlbumService(updatedAlbum, req.params.id)
    try {
        return res.status(201).send({patchedData})
    } catch (err) {
        return res.status(400).json({ message: message.err })
    }
})

// Delete Album
router.delete('/:id', async (req, res) => {
    const deletedAlbum = await deletedAlbumService(req.params.id)
    try {
        return res.status(201).send({ message: 'Album has been deleted'})
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
})


module.exports = router;