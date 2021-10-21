const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const { fourHundred } = require('../utils/errorHandling')

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

const loginValidation = async (body) => {
    const loginSchema = Joi.object({
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .required()
            .min(8)
            .max(24)
    })
    try {
        return await loginSchema.validate(body)
    } catch (err) {
        return 'Login Validation Failed'
    }
}

const saltedPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    } catch (err) {
        return fourHundred(err.message)
    }
}

module.exports = { registerValidation, loginValidation, saltedPassword }
