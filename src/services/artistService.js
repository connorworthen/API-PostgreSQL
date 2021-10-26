const { artistModel } = require('../models/artistModel/artist')

const allArtistsService = async () => {
    const artists = await artistModel.find()
    return artists
}

const oneArtistService = async (id) => {
    const artist = await artistModel.findById({_id: id})
    return artist
}

const createArtistService = async (name, age, recordLabel, description, albums, songs) => {
    const artistInstance = await artistModel({
            name,
            age,
            recordLabel,
            description,
            albums,
            songs
    })
    const artist = await artistInstance.save()
    if (artist) return artist
    return null
}

const updateArtistService = async (updatedArtist, id) => {
    const patch = await artistModel.updateMany({_id  : id}, {$set: updatedArtist})
    return patch
}

const deleteArtistService = async (id) => {
    const deleteArtist = await artistModel.deleteMany({_id  : id})
    return deleteArtist
}


module.exports = {
    allArtistsService,
    oneArtistService,
    createArtistService,
    updateArtistService,
    deleteArtistService,
}