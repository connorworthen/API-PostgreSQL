const User = require('../models/userModel/user');
const { saltedPassword } = require('../middleware/userValidation');

const registerService = async (email) => {
    const getEmail = await User.findOne({email})
    if (getEmail) return getEmail
    return null
}

const newInstanceAuth = async (firstName, lastName, email, password) => {
    const user = new User({
        firstName,
        lastName,
        email,
        password: await saltedPassword(password)
    })
    const newUser = await user.save()
    if (newUser) return newUser
    return null
}

module.exports = { registerService, newInstanceAuth }
