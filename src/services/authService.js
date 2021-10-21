const User = require('../models/userModel/user');
const { saltedPassword } = require('../middleware/userValidation');
const { jwtToken } = require('../utils/utils')
const {fourHundred, loginError } = require("../utils/errorHandling");

const newInstanceAuth = async (firstName, lastName, email, password) => {
    const user = new User({
        firstName,
        lastName,
        email,
        password: await saltedPassword(password)
    })
    try {
        return await user.save()
    } catch (err) {
        return fourHundred(err.message)
    }
}

const registerService = async (email) => {
    const getEmail = await User.findOne({email})
    if (getEmail !== null) return getEmail
    return loginError()
}

const jwtAuth = async (email) => {
    try {
        const userExist = await User.findOne({email})
        return jwtToken(userExist.id)
    } catch (err) {
        return 'JWT Error'
    }
}

module.exports = { registerService, newInstanceAuth, jwtAuth  }
