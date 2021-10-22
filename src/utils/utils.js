const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {passwordError} = require("../utils/errorHandling");

const passwordCheck = async (password, comparePassword) => {
    const validPassword = await bcrypt.compare(password, comparePassword)
    if (!validPassword) return passwordError()
}

const jwtToken = async (id) => {
        return jwt.sign(
            { user_id: id },
            process.env.TOKEN_KEY,
            {
                expiresIn: "8h",
            }
        )
}

module.exports = { passwordCheck , jwtToken }