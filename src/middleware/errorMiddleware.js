function apiErrorHandler (err, req, res) {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message || 'Internal Server Error',
            detail: err.detail
        }
    })
}

module.exports = apiErrorHandler