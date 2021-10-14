const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).send('Access Denied. Please log in.')
    try {
        const verified = jwt.verify(token, config.TOKEN_KEY)
        req.emailCheck = verified
    } catch (err) {
        return res.status(401).send('Invalid Token')
    }
    return next()
}

module.exports = verifyToken