const mongoose = require('mongoose')
const albumSchema = require('../albumModel/album')
const songSchema = require('../songModel/song')
const Schema = mongoose.Schema

const artistSchema = new Schema({
    artistName: {
        type: String,
        required: [true, 'Album name is required']
    },
    artistRecordLabel: {
        type: String,
        required: [true, 'Album name is required']
    },
    artistDescription: {
        type: String,
        required: false,
        max: 1024
    },
    artistAlbum: {
        type: [{ type: Schema.Types.ObjectId, ref: albumSchema }]
    },
    artistSong: {
        type: [{ type: Schema.Types.ObjectId, ref: songSchema }]
    }
})

module.exports = mongoose.model('Artist', artistSchema);