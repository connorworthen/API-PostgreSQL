const router = require('express').Router()
const { allArtistsService, oneArtistService, createArtistService } = require('../../services/artistService')
const newArtistService = require('../../middleware/artistValidation')

// Get all Artists
router.get('/', async (req, res) => {
    try {
        const artists = await allArtistsService()
        return res.status(201).send({artists})
    } catch (err) {
        return res.status(400).send({ message: err.message })
    }
})

// Get one Artist
router.get('/:id', async (req, res) => {
    const artist = await oneArtistService(req.params.id)
    try {
        return res.status(200).send({artist})
    } catch (err) {
        return res.status(400).send({message: err.message})
    }
})

// Create a new Artist
router.post('/', async (req, res) => {
    const {artistName, artistRecordLabel, artistDescription, artistAlbum, artistSong} = req.body
    const validateData = await newArtistService(req.body)
    if (validateData.error) {
        return res.status(400).json({ message: 'Failed to create artist'})
    } else {
        const newArtist = await createArtistService(artistName, artistRecordLabel, artistDescription, artistAlbum, artistSong)
        return res.status(201).send(newArtist)
    }
})


module.exports = router