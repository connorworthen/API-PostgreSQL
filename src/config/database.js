const mongoose = require('mongoose')

const { DATABASE_URL } = process.env

exports.connect = () => {
    mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Connected to Database")
    })
    .catch((err) => {
        console.log("Connection failed. Please try again")
    })
}