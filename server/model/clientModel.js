const mongoose = require("mongoose");

const Schema = mongoose.Schema

const clientSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    phoneNunmber: {
        required: true,
        type: Number
    }
}, {timestamps: true})

module.exports = mongoose.model("client", clientSchema)
