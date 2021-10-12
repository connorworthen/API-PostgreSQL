const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require("bcryptjs");
const { registerSchema } = require('../validations/userValidation')

router.post('/register', async (req, res) => {
    const { error } = registerSchema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const emailExist = await User.findOne({email: req.body.email})
    if (emailExist) return res.status(400).send('Email already exists. Please log in.')

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        const newUser = await user.save()
        res.send({ user: user._id, message: 'Success! User account created.'})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router