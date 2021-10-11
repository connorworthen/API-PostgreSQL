const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    first_name: { type: String, default: null, required: true },
    last_name: { type: String, default: null, required: true },
    email: { type: String, unique: true, default: null, required: true },
    password: { type: String, required: true},
    token: {type: String }
})

module.exports = mongoose.model("user", userSchema)