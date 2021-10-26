function apiErrorHandler (err, req, res) {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message || 'Internal Server Error'
        }
    })
}

module.exports = apiErrorHandler