const jwt = require("jsonwebtoken")

module.exports = function(req, res, next) {
    const token = req.header('auth-token')
    if (!token) res.status(401).send('Access Denied. Please log in.')

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.emailCheck = verified
    } catch (err) {
        res.status(400).send('Invalid Token')
    }
    next()
}