const router= require('express').Router()
const  { allArtistAlbum, albumService, oneAlbum, updateArtistAlbum } = require('../../services/artistAlbum')
const validateAlbum = require('../../middleware/albumValidation')
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
    console.log(req)
    const patchedAlbum = await updateArtistAlbum(req.body, req.params.id)
    try {
        return res.status(200).send({patchedAlbum})
    } catch (err) {
        return res.status(401).send({ message: err.message })
    }
})

module.exports = router