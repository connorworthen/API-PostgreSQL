const Joi = require('@hapi/joi');

const registerValidation = async (body) => {
    const registerSchema = Joi.object({
        firstName: Joi.string()
            .required()
            .min(3)
            .max(16),
        lastName: Joi.string()
            .required()
            .min(3)
            .max(24),
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .min(8)
            .required()
            .max(24)
    })
    try {
        return await registerSchema.validate(body)
    } catch (err) {
        return 'User Validation Failed'
    }
}

const saltedPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    } catch (err) {
        return 'error password'
    }
}
// Register Validation
module.exports = { registerValidation, saltedPassword}
// Login Validation
// const loginSchema = Joi.object({
//     email: Joi.string()
//         .required()
//         .email(),
//     password: Joi.string()
//         .required()
//         .min(8)
//         .max(24)
// })

// module.exports.loginSchema = loginSchema