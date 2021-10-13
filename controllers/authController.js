const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerSchema, loginSchema } = require('../validations/userValidation')
// const { registerService } = require('../services/authService')

const registerController = async (req, res) => {

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        const
        const newUser = await user.save()
        return res.send({ user: user._id, message: 'Success! User account created.'})
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

module.exports.registerController = registerController