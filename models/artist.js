const mongoose = require('mongoose')
const { albumSchema } = require('./album')
const { songSchema } = require('./song')

const artistSchema = new mongoose.Schema({
    artistName: {
        type: String,
        required: 'Artist name is required'
    },
    artistRecordLabel: {
        type: String,
        required: 'Record Label is required'
    },
    artistDescription: {
        type: String,
        required: false,
        max: 1024
    },
    artistAlbum: {
        type: albumSchema,
        required: false
    },
    artistSong: {
        type: songSchema,
        required: false
    }
})

module.exports = mongoose.model('Artist', artistSchema);