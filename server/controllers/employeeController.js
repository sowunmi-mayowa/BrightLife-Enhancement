const Employee = require('../model/employeeModel');

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({}).sort({ createdAt: -1 });
        res.status(200).json(employees);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }   
}

const getEmployee = async (req, res) => {
    const { name, email, employeeId } = req.query;
    
    // Debugging - log what we're receiving from the request
    console.log("Request Query Parameters:", { name, email, employeeId });

    const query = {};

    if (name) {
        query.name = { $regex: name, $options: 'i' }; // case-insensitive partial match
    }

    if (email) {
        query.email = { $regex: email, $options: 'i' }; // Changed to case-insensitive partial match
    }

    if (employeeId) {
        query.employeeId = { $regex: employeeId, $options: 'i' };
    }

    console.log("Constructed Query:", JSON.stringify(query)); // Better debugging log

    try {
        const results = await Employee.find(query);
        console.log("Query Results Count:", results.length); // Log the count
        console.log("First Result (if any):", results[0]); // Log the first result if it exists
        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching employees:", error.message, error.stack); // Include stack trace
        res.status(500).json({ error: error.message }); // Changed to 500 for server errors
    }
};

module.exports = {
    getEmployee,
    getAllEmployees
};