const Procurement = require('../model/procurementModel');
const Employee = require('../model/employeeModel'); 

const addProcurementRequest = async (req, res) => {
    const { employeeId, item, reason, preferredVendor } = req.body;

    console.log("Request Body:", req.body);

    try {
        if (!employeeId || !item || !reason || !preferredVendor) {
            return res.status(400).json({ error: "Employee ID, item, reason and preferred vendor are required" });
        }

        // 🔍 Find employee by employeeId (e.g., "EMO063")
        const employee = await Employee.findOne({ employeeId });

        if (!employee) {
            return res.status(404).json({ error: "Employee not found" });
        }

        // ✅ Use employee._id (actual ObjectId)
        const procurement = await Procurement.create({
            employee: employee._id,
            item,
            reason,
            preferredVendor
        });

        res.status(200).json(procurement);

    } catch (error) {
        console.error("Error adding procurement request:", error);
        res.status(500).json({ error: error.message });
    }
};

const getProcurementRequests = async (req, res) => {
    try {
        const procurements = await Procurement.find({})
            .populate('employee', 'employeeId name email') // Populate employee details
            .sort({ submittedAt: -1 }); // Sort by submission date

        res.status(200).json(procurements);
    } catch (error) {
        console.error("Error fetching procurement requests:", error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = { addProcurementRequest, getProcurementRequests };