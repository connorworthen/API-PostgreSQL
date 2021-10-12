const mongoose = require('mongoose')

const albumSchema = mongoose.Schema({
    albumName: {
        type: String,
        required: [true, 'Album name is required']
    },
    albumTracks: [{
        type: String,
        required: [true, 'Minimum of three tracks are required']
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Album', albumSchema);