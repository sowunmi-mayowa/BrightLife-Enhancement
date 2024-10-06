const mongoose = require("mongoose");

const Schema = mongoose.Schema

const adminSchema = new Schema({
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("admin", adminSchema)