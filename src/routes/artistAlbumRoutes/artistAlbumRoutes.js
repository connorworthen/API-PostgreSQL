const router= require('express').Router()
const  allArtistAlbum = require('../../services/artistAlbum')
// Get all Artist Albums
router.get('/:id/albums', async (req, res) => {
    try {
        console.log(req)
        const artist = await allArtistAlbum(req.params.id)
        return res.status(201).send({artist})
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
})

module.exports = router