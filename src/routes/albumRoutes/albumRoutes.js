const AlbumService =  require("../../services/albumService")
const router = require('express').Router();

// Get all Albums
router.get('/', async (req, res) => {
    try {
        // const albums = await AlbumService.allAlbumsService
        // return res.status(201).send()
        return 'you have reach all albums'
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