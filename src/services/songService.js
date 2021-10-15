const Song = require('../models/songModel/song')

const allSongsService = async () => {
    try {
        const songs = await Song.find()
        return songs
    } catch (err) {
        return 'All songs service failed'
    }
}

const oneSongService = async (id) => {
    try {
        const song = await Song.findById({_id: id})
        return song
    } catch (err) {
        return 'Getting song service failed'
    }
}

const createSongService = async (songName, artistName) => {
    const song = new Song({ songName, artistName })
    try {
        return await song.save()
    } catch (err) {
        return 'Creating song service failed'
    }
}

const updateSongService = async (updatedSong, id) => {
    const patch = await Song.updateMany({_id  : id}, {$set: updatedSong})
    try {
        return patch
    } catch (err) {
        return 'Failed to update song service'
    }
}

const deleteSongService = async (id) => {
    const deleteAlbum = await Song.remove({_id  : id})
    try {
        return deleteAlbum
    } catch (err) {
        return 'Failed to delete song service'
    }
}


module.exports = {
    allSongsService,
    oneSongService,
    createSongService,
    updateSongService,
    deleteSongService
}