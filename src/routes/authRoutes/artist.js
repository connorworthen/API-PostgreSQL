const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({
    name: {
        type: String
    },
    tracks: [{
        type: String
    }]
})

const songSchema = new Schema({
    name: {
        type: String
    }
})

const artistSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    recordLabel: {
        type: String
    },
    description: {
        type: String
    },
    albums: [albumSchema],
    songs: [songSchema]
})

module.exports = mongoose.model('Artist', artistSchema);
