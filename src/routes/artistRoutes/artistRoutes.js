const router = require('express').Router()
const createError = require("http-errors");
const { allArtistsService, oneArtistService, createArtistService, updateArtistService, deleteArtistService } = require('../../services/artistService')
const newArtistService = require('../../middleware/artistValidation')
const { artistGetAll, artistId, idNotFound } = require('../../errorHandler/apiError')

// Get All Artists
router.get('/', async (req, res, next) => {
    try {
        const artists = await allArtistsService()
        return res.status(201).send({artists})
    } catch (err) {
        next(artistGetAll())
        return
    }
})

// Get One Artist
router.get('/:id', async (req, res, next) => {
    try {
        const artist = await oneArtistService(req.params.id)

        return res.status(200).send({artist})
    } catch (err) {
        next(artistId(err))
        return
    }
})

// Create a new Artist
router.post('/', async (req, res, next) => {
    const artistData = req.body
    const {name, age, recordLabel, description, albums, songs} = req.body
    try {
        const validateData = await newArtistService(artistData)

        if (!validateData) {
            const newArtist = await createArtistService(name, age, recordLabel, description, albums, songs)
            return res.status(201).send({newArtist})
        }
        throw createError(400, 'One or More of the validations failed')
    } catch (err) {
        next(err)
        return
    }
})

// Update Artist
router.patch('/:id', async (req, res, next) => {
    const updatedArtist = req.body
    try {
        const validateData = await newArtistService(updatedArtist)

        if (!validateData) {
            const patchedArtist = await updateArtistService(updatedArtist, req.params.id)
            return res.status(200).send({patchedArtist})
        }
        throw createError(404, 'Artist Id Not Found')
    } catch (err) {
        next(artistId(err))
        return
    }
})

// Delete Artist
router.delete('/:id', async (req, res, next) => {
    try {
        const artist = await deleteArtistService(req.params.id)

        if (artist.deletedCount > 0) return res.status(204).send({message: 'Deleted Artist'})
        throw createError(404, 'Artist Id Not Found')
    } catch (err) {
        next(idNotFound(err))
        return
    }
})


module.exports = router