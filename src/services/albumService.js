const Album = require('../models/albumModel/album')

const allAlbumsService = async () => {
    try {
        const album = await Album.find()
        return 'got all albums'
    } catch (err) {
        return 'Not Possible'
    }
}

// const createAlbumService = async ({email}) => {
//     try {
//         const emailExist = await Album.findOne({email})
//         if (emailExist) return ('Email already exists. Please log in.')
//     } catch (err) {
//         return 'Not Possible'
//     }
// }

module.exports = {
    allAlbumsService
    // createAlbumService
}