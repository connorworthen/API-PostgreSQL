const Joi = require('@hapi/joi');

// Register Validation
const registerValidation = data => {
    const schema = {
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
            .required()
            .min(8)
            .max(24)
    }
    return Joi.valid(data, schema)
}

// Login Validation
const loginValidation = data => {
    const schema = {
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .required()
            .min(8)
            .max(24)
    }
    return Joi.valid(data, schema)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation