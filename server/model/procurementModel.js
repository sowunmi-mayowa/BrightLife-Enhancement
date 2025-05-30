const mongoose = require('mongoose');

const procurementSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    item: {
        name: { type: String, required: true },
        quantity: { type: Number, default: 1 },
        decscription: { type: String },
    },
    reason: {
        type: String,
        required: true
    },
    preferredVendor: {
        name: String,
        link: String
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected', 'fulfilled'],
        default: 'pending'
    },
    submittedAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected', 'fulfilled'],
        default: 'pending'
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Procurement', procurementSchema);