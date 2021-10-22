const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const passwordCheck = async (password, comparePassword) => {
    return await bcrypt.compare(password, comparePassword)
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