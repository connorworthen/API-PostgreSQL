const mongoose = require('mongoose')
// Creating Model to interact with DB

// Create Schema
const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedToChannel: {
        type: String,
        required: true
    },
    subscribedData: {
        type: Date,
        required: true,
        default: Date.now
    }
})

// Exporting Model
module.exports = mongoose.model('Subscriber', subscriberSchema)