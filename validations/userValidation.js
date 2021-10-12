const Joi = require('@hapi/joi');

// Register Validation
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
        .required()
        .min(8)
        .max(24)
})

// Login Validation
const loginSchema = Joi.object({
    email: Joi.string()
        .required()
        .email(),
    password: Joi.string()
        .required()
        .min(8)
        .max(24)
})


module.exports.registerSchema = registerSchema
module.exports.loginSchema = loginSchema