const mongoose = require("mongoose");
const createError = require("http-errors");

function artistGetAll () {
    return createError('404', 'Artists not found')
}

function artistGetId (err) {
    if (err instanceof mongoose.CastError) {
        return createError(404, 'Artist Id Invalid')
    }
    return createError()
}


module.exports = {
    artistGetAll,
    artistGetId
}