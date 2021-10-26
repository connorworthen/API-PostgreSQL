const ApiError = require('./apiError')

function apiErrorHandler (err, req, res) {
    if (err instanceof ApiError) {
        res.status(err.code).json(err.message)
        return
    }
    return res.status(500).json('Internal Service Error')
}

module.exports = apiErrorHandler