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

const createArtistService = async (artistName, artistRecordLabel, artistDescription, artistAlbum, artistSong) => {
    const artist = await Artist({
        artistName,
        artistRecordLabel,
        artistDescription,
        artistAlbum,
        artistSong
    })
    try {
        console.log(artist)
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