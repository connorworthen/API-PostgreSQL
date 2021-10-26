const Joi = require('@hapi/joi')
const {fourHundred} = require("../utils/errorHandling");

const newArtistService = async (body) => {
    const albumValidation = Joi.object({
        name: Joi.string()
            .min(3)
            .max(24)
            .required(),
        tracks: Joi.array()
            .min(3)
            .max(24)
            .required(),
    })

    const songValidation = Joi.object({
        name: Joi.string()
            .min(3)
            .max(24)
            .required(),
    })

    const artistValidation = Joi.object({
        name: Joi.string()
            .min(3)
            .max(24)
            .required(),
        age: Joi.number()
            .required(),
        recordLabel: Joi.string()
            .min(3)
            .max(64)
            .required(),
        description: Joi.string()
            .min(3)
            .max(1024)
            .required(),
        albums: Joi.array().items(albumValidation),
        songs: Joi.array().items(songValidation)
    })
    const artistData = await artistValidation.validate(body)
    if (artistData.error) return fourHundred()
}

module.exports = newArtistService