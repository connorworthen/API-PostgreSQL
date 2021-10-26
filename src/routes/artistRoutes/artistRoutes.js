const router = require('express').Router()
const { allArtistsService, oneArtistService, createArtistService, updateArtistService, deleteArtistService } = require('../../services/artistService')
const newArtistService = require('../../middleware/artistValidation')
const createError = require('http-errors')

// Get all Artists
router.get('/', async (req, res) => {
    try {
        const artists = await allArtistsService()
        return res.status(201).send({artists})
    } catch (err) {
        throw createError()
        return
    }
})

// Get one Artist
router.get('/:id', async (req, res, next) => {
    try {
        const artist = await oneArtistService(req.params.id)
        console.log(artist)

        if (!artist) {
            throw createError(404, 'Artist Not Found')
        }
        return res.status(200).send({artist})
    } catch (err) {
        next(err)
        return
    }
})

// Create a new Artist
router.post('/', async (req, res) => {
    const artistData = req.body
    const {name, age, recordLabel, description, albums, songs} = req.body
    const validateData = await newArtistService(artistData)
    if (validateData.error) {
        return res.status(400).json({ message: 'Failed to create artist' })
    } else {
        const newArtist = await createArtistService(name, age, recordLabel, description, albums, songs)
        return res.status(201).send(newArtist)
    }
})

// Update Artist
router.patch('/:id', async (req, res) => {
    const updatedArtist = req.body
    const patchedArtist = await updateArtistService(updatedArtist, req.params.id)
    try {
        return res.status(200).send({patchedArtist})
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
})

// Delete Artist
router.delete('/:id', async (req, res) => {
    const deleteArtist = await deleteArtistService(req.params.id)
    try {
        return res.status(200).send({ message:'Song has been deleted'})
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
})


module.exports = router