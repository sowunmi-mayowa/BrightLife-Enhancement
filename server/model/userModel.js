const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    jobRole: {
        required: true,
        type: String
    },
    dateJoined: {
        required: true,
        type: Date
    },
})

module.exports = mongoose.model("user", userSchema)