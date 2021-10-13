const User = require('../models/userModel/user');
const { saltedPassword } = require('../middleware/userValidation');

const registerService = async (email) => {
    try {
        const emailExist = await User.findOne({email})
        if (emailExist) return 'Email already exists. Please log in.'
    } catch {
        return 'auth service fail'
    }
    return null
}

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
        return 'Error.'
    }
}

module.exports = { registerService, newInstanceAuth }
