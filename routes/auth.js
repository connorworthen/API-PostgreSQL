const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerSchema, loginSchema } = require('../validations/userValidation')

// Register
router.post('/register', async (req, res) => {
    // Validate data before creating new instance of User
    const { error } = registerSchema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // Checks if email exists
    const emailExist = await User.findOne({email: req.body.email})
    if (emailExist) return res.status(400).send('Email already exists. Please log in.')

    // Salts and hashes password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // Creates new instance of User
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        // Saves user and sends back id & success message
        const newUser = await user.save()
        res.send({ user: user._id, message: 'Success! User account created.'})
    } catch (err) {
        // send back user side error w/ message
        res.status(400).json({ message: err.message })
    }
})

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