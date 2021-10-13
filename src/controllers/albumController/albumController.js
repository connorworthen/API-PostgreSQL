const AlbumService =  require("../../services/albumService")

const allAlbums = async (req, res) => {
    try {
        const albums = await AlbumService.allAlbumsService
        return res.status(201).send(albums)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

const createAlbum = async (req, res) => {
    try {
        const newAlbum = await .create(req.body)
        return res.status(201).send(newAlbum)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}


module.exports = {
    allAlbums,
    createAlbum
}