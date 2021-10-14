const { allAlbumsService } =  require("../../services/albumService")
const express = require('express')
const router = express.Router()
const Album = require('../../models/albumModel/album');

// Get all Albums
router.get('/', async (req, res) => {
    try {
        const albums = await allAlbumsService()
        return res.status(201).send({albums})
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
});

router.post('/', async (req, res) => {
    try {
        const { albumName, albumTracks, date } = req.body
        const validateData = await newAlbumService(req.body)
        const newAlbum = await AlbumService.create(req.body)
        return res.status(201).send(newAlbum)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
})


module.exports = router;