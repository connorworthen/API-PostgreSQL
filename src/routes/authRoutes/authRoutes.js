const router = require('express').Router();
const User = require('../../models/userModel/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation } = require('../../middleware/userValidation');
const { registerService, newInstanceAuth } = require('../../services/authService');

// Register Route
router.post('/', async (req, res) => {
    const {firstName, lastName, email, password} = req.body
    const validation = await registerValidation(req.body)
    const emailCheck = await registerService(email)
    if (validation.error || emailCheck) {
        return res.status(400).send('failed add messages')
    } else {
        const user = await newInstanceAuth(firstName, lastName, email, password)
        return res.send({ user: user._id, message: 'Success! User account created.'})
    }
})


// Login
// router.post('/login', async (req, res) => {
//     // Validate data before creating logging in User
//     const { error } = loginSchema.validate(req.body)
//     if (error) return res.status(400).send(error.details[0].message)

//     // Checks if email exists
//     const emailCheck = await User.findOne({email: req.body.email})
//     if (!emailCheck) return res.status(400).send('Email does not exist.')

//     // Check if password is correct
//     const validPassword = await bcrypt.compare(req.body.password, emailCheck.password)
//     if (!validPassword) return res.status(400).send('Invalid password. Please try again.')

//     // Create and assign token
//     const token = jwt.sign({_id: emailCheck._id}, process.env.TOKEN_SECRET, {
//         expiresIn: process.env.JWT_EXPIRES_IN,
//     })
//     res.header('auth-token', token)

//     res.send({ message: 'Success! Logged in.', token})
// })

module.exports = router