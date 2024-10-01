const mongoose = require("mongoose");

const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
    },
    phoneNumber: {
        required: true,
        type: Number
    },
    date: {
        required: true,
        type: String
    },
    time: {
        required: true,
        type: String
    }
}, {timestamps: true})


module.exports = mongoose.model('appointment', appointmentSchema)