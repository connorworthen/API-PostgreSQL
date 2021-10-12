const mongoose = require('mongoose')

const songSchema = mongoose.Schema({
    songName: {
        type: String,
        required: 'Album Name is required',
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Song', songSchema);