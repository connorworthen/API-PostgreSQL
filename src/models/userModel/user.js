const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        min: 3,
        max: 16
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        min: 1,
        max: 24
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        min: 8,
        max: 24,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('User', userSchema);