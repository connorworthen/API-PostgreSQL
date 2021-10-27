const mongoose = require("mongoose");
const createError = require("http-errors");

function artistGetAll () {
    return createError('404', 'Artists not found')
}

function artistId(err) {
    if (err instanceof mongoose.CastError) {
        return createError(404, 'Artist Id Invalid')
    }
    return createError(400, 'One or more Validations Failed')
}

function idNotFound(err) {
    if (err instanceof mongoose.CastError) {
        return createError(404, 'Invalid Id')
    }
    return createError(404, 'Artist Id Not Found')
}

module.exports = {
    artistGetAll,
    artistId,
    idNotFound
}