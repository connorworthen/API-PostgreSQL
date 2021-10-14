const User = require('../models/userModel/user')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const passwordCheck = async (password, passwordAuth) => {
    try {
        const validPassword = await bcrypt.compare(password, passwordAuth)
        if (!validPassword) return 'Invalid password. Please try again.'
    } catch (err) {
        return 'Password Auth Failed'
    }
    return null
}

const jwtToken = async (id) => {
        const token = jwt.sign(
            { user_id: id },
            process.env.TOKEN_KEY,
            {
                expiresIn: "8h",
            }
        )
        return token
}

module.exports = { passwordCheck , jwtToken }