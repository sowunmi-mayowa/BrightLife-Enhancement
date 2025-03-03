const mongoose = require("mongoose");

const Schema = mongoose.Schema

const contactSchema = new Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    number: {
        required: true,
        type: String,
        unique: true
    },
    message: {
        required: true,
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("contact", contactSchema)