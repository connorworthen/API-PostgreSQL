const Joi = require('@hapi/joi')

const newArtistService = async (body) => {
    const albumValidation = Joi.object({
        name: Joi.string().required(),
        tracks: Joi.array().required(),
    })

    const songValidation = Joi.object({
        name: Joi.string().required(),
    })

    const artistValidation = Joi.object({
        name: Joi.string().required(),
        age: Joi.number().required(),
        recordLabel: Joi.string().required(),
        description: Joi.string().required(),
        albums: Joi.array().items(albumValidation),
        songs: Joi.array().items(songValidation)
    })
    try {
        return await artistValidation.validate(body)
    } catch (err) {
        return 'Artist validation failed'
    }
}

module.exports = newArtistService