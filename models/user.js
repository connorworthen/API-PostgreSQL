const mongoose = require("mongoose")

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'First name is required',
        min: 3,
        max: 16
    },
    lastName: {
        type: String,
        required: 'Last name is required',
        min: 3,
        max: 24
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: 'Password is required',
        min: 8,
        max: 1024,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('User', userSchema);