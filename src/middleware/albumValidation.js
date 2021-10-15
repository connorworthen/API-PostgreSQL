const Joi = require('@hapi/joi')

const newAlbumService = async (body) => {
    const newAlbumSchema = Joi.object({
        albumName: Joi.string()
            .min(3)
            .max(24)
            .required(),
        albumTracks: Joi.array()
            .items(
                Joi.string()
                    .required(),
                Joi.string()
                    .required(),
                Joi.number(),
            )
    })
    try {
        return await newAlbumSchema.validate(body)
    } catch (err) {
        return 'Album Validation Failed'
    }
}

module.exports = newAlbumService