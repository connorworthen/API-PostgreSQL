const { artistModel } = require('../models/artistModel/artist')
const { albumModel } = require('../models/artistModel/artist')
const { fourHundred } = require('../utils/errorHandling')

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
        // const artist = await artistModel.find( { $and: [ { "albums._id": {$eq: albumId} }, { "_id": {$eq: id} } ] } )
        const artist = await artistModel.findById({_id: id});
        return artist.albums.filter((album) => {
            return album._albumId.toString() === albumId
        })
    } catch (err) {
        console.log(err)
        return {error: err}
    }
}

const albumService = async (name, tracks, id) => {
    const album = await albumModel({ name, tracks })
    try {
        return await artistModel.findOneAndUpdate({_id: id}, {$push: {albums: album}})
    } catch (err) {
        return {error: err}
    }
}

const updateArtistAlbum  = async (updatedArtist, id) => {
    const artist = await artistModel.findById({_id: id})
    const patch = await artistModel.updateMany({_id  : id}, {$set: updatedArtist})
    try {
        return patch1;
    } catch (err) {
        return fourHundred(err.message)
    }
}



module.exports = {
    allArtistAlbum,
    albumService,
    oneAlbum,
    updateArtistAlbum
}