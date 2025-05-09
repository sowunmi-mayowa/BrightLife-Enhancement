const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    startDate: { type: Date },
    status: { type: String },
    jobRole: { type: String },
    ptoUsed: { type: Number }
});

module.exports = mongoose.model('Employee', employeeSchema);