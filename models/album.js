const mongoose = require('mongoose')

const albumSchema = mongoose.Schema({
    albumDetails: {
        type: Map,
        of: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Album', albumSchema);