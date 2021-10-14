const Album = require('../models/albumModel/album')

const allAlbumsService = async () => {
    try {
        const album = await Album.find()
        return album
    } catch (err) {
        return 'Not Possible'
    }
}

const oneAlbumService = async (id) => {
    try {
        const album = await Album.findById({_id: id})
        return album
    } catch (err) {
        return 'Cannot get album'
    }
}

const createAlbumService = async (albumName, albumTracks) => {
    const album = new Album({ albumName, albumTracks })
    try {
        return await album.save()
    } catch (err) {
        return 'Album Service Error'
    }
}

const patchAlbumService = async (updatedAlbum, id) => {
    const patch = await Album.updateMany({_id  : id}, {$set: updatedAlbum})
    try {
        return patch
    } catch (err) {
        return 'Updated Service Failed.'
    }
}

const deletedAlbumService = async (id) => {
    const deleteAlbum = await Album.remove({_id  : id})
    try {
        return deleteAlbum
    } catch (err) {
        return 'Failed to delete album'
    }
}

module.exports = {
    allAlbumsService,
    createAlbumService,
    oneAlbumService,
    patchAlbumService,
    deletedAlbumService
}