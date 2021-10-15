const Joi = require('@hapi/joi')

const newArtistService = async (body) => {
    const newArtistSchema = Joi.object({
        artistName: Joi.string()
            .required(),
        artistRecordLabel: Joi.string()
            .required(),
        artistDescription: Joi.string()
            .required(),
        artistAlbum: Joi.object({
            artistName: Joi.string().required,
            albumTracks: Joi.array().required,
        }),
        artistSong: Joi.object({
            artistName: Joi.string().required,
            songName: Joi.string().required,
        })
    })
    try {
        return await newArtistSchema.validate(body)
    } catch (err) {
        return 'Artist validation failed'
    }
}

module.exports = newArtistService