const Joi = require('@hapi/joi')

const newSongService = async (body) => {
    const newSongSchema = Joi.object({
        songName: Joi.string()
            .min(3)
            .max(24)
            .required(),
        artistName: Joi.string()
            .min(3)
            .max(24)
            .required(),
    })
    try {
        return await newSongSchema.validate(body)
    } catch (err) {
        return 'Song Validation Failed'
    }
}

module.exports = newSongService