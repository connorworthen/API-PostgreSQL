const router = require('express').Router();
const User = require('../models/user');
const { registerSchema } = require('../validations/userValidation')

router.post('/register', async (req, res) => {
    const { error } = registerSchema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const emailExist = await User.findOne({email: req.body.email})
    if (emailExist) return res.status(400).send('Email already exists. Please log in.')

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const newUser = await user.save()
        res.send(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router