const Joi = require('@hapi/joi')

const validateAlbum = async (body) => {
    const validateSchema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(24)
            .required(),
        tracks: Joi.array()
            .items(
                Joi.string()
                    .required(),
                Joi.string()
                    .required()
            )
    })
    try {
        return await validateSchema.validate(body)
    } catch (err) {
        return 'hello'
    }
}

module.exports = validateAlbum