// const { registerService } = require('../services/authService')

const registerController = async (req, res, next) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        const newUser = await user.save()
        return res.send({ user: user._id, message: 'Success! User account created.'})
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

module.exports.registerController = registerController

