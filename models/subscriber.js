const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Creating Model to interact with DB

// Create Schema
const subscriberSchema = new Schema({
    name: { type: String, required: true },
    subscribedToChannel: { type: String, required: true },
    subscribedData: { type: Date, default: Date.now}
})

// Exporting Model
module.exports = mongoose.model('Subscriber', subscriberSchema)