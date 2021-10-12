const router = require('express').Router();
const User = require('../models/user');

router.post('/register', async (req, res) => {
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