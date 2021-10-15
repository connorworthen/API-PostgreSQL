const mongoose = require('mongoose')

const songSchema = mongoose.Schema({
    songName: {
        type: String,
        required: [true, 'Album Name is required']
    },
    artistName: {
        type: String,
        required: [true, 'Artist Name is required']
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Song', songSchema);