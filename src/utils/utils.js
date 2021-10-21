const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {passwordError} = require("../utils/errorHandling");
const {jwtAuth} = require("../services/authService");

const passwordCheck = async (password, comparePassword) => {
    const validPassword = await bcrypt.compare(password, comparePassword)
    if (validPassword) return passwordError()
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