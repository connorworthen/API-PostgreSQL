const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true},
    isConfirmed: {type: Boolean, required: true, default: 0},
    token: { type: String },
});

module.exports = mongoose.model('User', userSchema);