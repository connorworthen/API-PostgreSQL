const AlbumService =  require("../../services/albumService")
const verify = require('../../middleware/verifyToken')
const express = require('express')
const router = express.Router()
router.use(verify)

// Get all Albums
router.get('/', async (req, res) => {
    try {
        // const albums = await AlbumService.allAlbumsService
        // return res.status(201).send()
        return res.status(201).send('you have reached the index of all albums')
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
});

// router.post('/', verify, async (req, res) => {
//     try {
//         const newAlbum = await AlbumService.create(req.body)
//         return res.status(201).send(newAlbum)
//     } catch (err) {
//         return res.status(400).json({ message: err.message })
//     }
// })


module.exports = router;