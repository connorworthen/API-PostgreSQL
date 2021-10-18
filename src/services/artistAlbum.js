const Artist = require('../models/artistModel/artist')

const allArtistAlbum = async (id) => {
    try {
        const artist = await Artist.findById({_id: id});
        console.log(id, artist)
        return artist.albums
    } catch (err) {
        return 'failed'
    }
}

module.exports = allArtistAlbum