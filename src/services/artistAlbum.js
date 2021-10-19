const { artistModel } = require('../models/artistModel/artist')
const { albumModel } = require('../models/artistModel/artist')

const allArtistAlbum = async (id) => {
    try {
        const artist = await artistModel.findById({_id: id});
        return artist.albums
    } catch (err) {
        return 'failed'
    }
}

const oneAlbum = async (id, albumId) => {
    try {
        const album = await artistModel.findById({_albumId: albumId})
        return album
    } catch (err) {
        return 'failed to get one album'
    }
}

const albumService = async (name, tracks, id) => {
    const album = await albumModel({ name, tracks })
    try {
        const updatedAlbum = await artistModel.findOneAndUpdate({_id: id}, {$push: {albums: album}})
        return updatedAlbum
    } catch (err) {
        return {error: err}
    }
}

const updateArtistAlbum  = async (updatedArtist, id) => {
    const artist = await artistModel.findById({_id: id})
    const patch = await artistModel.updateMany({_id  : id}, {$set: updatedArtist})
    try {
        return patch
    } catch (err) {
        return 'Artist service failed'
    }
}



module.exports = {
    allArtistAlbum,
    albumService,
    oneAlbum,
    updateArtistAlbum
}