const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerSchema, loginSchema } = require('../validations/userValidation')
const { registerController } = require('../controllers/authController')

// Register Route
router.post('/register', registerController)

// Login
router.post('/login', async (req, res) => {
    // Validate data before creating logging in User
    const { error } = loginSchema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // Checks if email exists
    const emailCheck = await User.findOne({email: req.body.email})
    if (!emailCheck) return res.status(400).send('Email does not exist.')

    // Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, emailCheck.password)
    if (!validPassword) return res.status(400).send('Invalid password. Please try again.')

    // Create and assign token
    const token = jwt.sign({_id: emailCheck._id}, process.env.TOKEN_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
    res.header('auth-token', token)

    res.send({ message: 'Success! Logged in.', token})
})

module.exports = router