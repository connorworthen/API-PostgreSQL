const router= require('express').Router()
const  { allArtistAlbum, albumService, oneAlbum, updateArtistAlbum } = require('../../services/artistAlbum')
const { allAlbumsService, createAlbumService, oneAlbumService, patchAlbumService, deletedAlbumService } = require("../../services/albumService")
const validateAlbum = require('../../middleware/albumValidation')

// Get all Albums
router.get('/', async (req, res) => {
    try {
        const albums = await allAlbumsService()
        return res.status(201).send({albums})
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
})

// Get all Artist Albums
router.get('/:id/albums', async (req, res) => {
    try {
        const albums = await allArtistAlbum(req.params.id)
        return res.status(201).send({albums})
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
})

router.get('/:id/albums/:albumId', async (req, res) => {
    try {
        const album = await oneAlbum(req.params.id, req.params.albumId)
        return res.status(200).send({album})
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
})

router.post('/:id/:albums', async (req, res) => {
    const { name, tracks } = req.body
    const validation = await validateAlbum(req.body)
    if (validation.error) {
        return res.status(400).json({ message: 'Failed to create'})
    } else {
        const newAlbum = await albumService(name, tracks, req.params.id)
        return res.status(201).send(newAlbum)
    }
})

router.patch('/:id/:albums/:albumId', async (req, res) => {
    const { name, tracks } = req.body
    try {
        const patchedAlbum = await updateArtistAlbum(req.body, req.params.id)
        return res.status(200).send({patchedAlbum})
    } catch (err) {
        console.log(err)
        return res.status(err.code).send(err);
    }
})

module.exports = router