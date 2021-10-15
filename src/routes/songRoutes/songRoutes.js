const router = require('express').Router()
const { allSongsService, oneSongService, createSongService, updateSongService, deleteSongService } = require('../../services/songService')
const newSongService = require('../../middleware/songValidation')


// Get all Songs
router.get('/', async (req, res) => {
    try {
        const songs = await allSongsService()
        return res.status(201).send({songs})
    } catch (err) {
        return res.status(400).json({ message: err.message})
    }
})

// Get one Song
router.get('/:id', async (req, res) => {
    const song = await oneSongService(req.params.id)
    try {
        return res.status(200).json({song})
    } catch (err) {
        return res.status(400).json({ message: err.message})
    }
})

// Create a new Song
router.post('/', async (req, res) => {
    const { songName, artistName } = req.body
    const validateSong = await newSongService(req.body)
    if (validateSong.error) {
        return res.status(400).json({ message: 'Failed to create song'})
    } else {
        const newSong = await createSongService(songName, artistName)
        return res.status(201).send(newSong)
    }
})

// Update Song
router.patch('/:id', async (req, res) => {
    const updatedSong = req.body
    const patchedSong = await updateSongService(updatedSong, req.params.id)
    try {
        return res.status(200).json({patchedSong})
    } catch (err) {
        return res.status(500).json({message: err.message })
    }
})


// Delete Song
router.delete('/:id', async (req, res) => {
    const deletedSong = await deleteSongService(req.params.id)
    try {
        return res.status(201).json({message: 'Song has been deleted'})
    } catch (err) {
        return res.status(400).json({ message: err.message})
    }
})

module.exports = router