const User = require('../models/userModel/user')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const passwordCheck = async (email, password) => {
    try {
        const user = await User.find({email})
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) return 'Invalid password. Please try again.'
    } catch (err) {
        return 'Password Auth Failed'
    }
    return null
}

// const jwtAuth = async () => {
//     if (passwordCheck) {
//         const token = jwt.sign(
//             { user_id: User._id, email },
//             process.env.TOKEN_KEY,
//             {
//                 expiresIn: "8h",
//             }
//         )
//         User.token = token
//         return token
//     }
// }

module.exports = { passwordCheck }