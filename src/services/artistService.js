const Artist = require('../models/artistModel/artist')

const allArtistsService = async () => {
    try {
        const artists = await Artist.find()
        return artists
    } catch (err) {
        return 'Artist service failed'
    }
}

const oneArtistService = async (id) => {
    try {
        const artist = await Artist.findById({_id: id})
        return artist
    } catch (err) {
        return 'Artist service failed'
    }
}

const createArtistService = async (name, age, recordLabel, description, albums, songs) => {
    const artist = await Artist({
            name,
            age,
            recordLabel,
            description,
            albums,
            songs
    })
    try {
        return await artist.save()
    } catch (err) {
        return 'Artist service failed'
    }
}
module.exports = {
    allArtistsService,
    oneArtistService,
    createArtistService
}