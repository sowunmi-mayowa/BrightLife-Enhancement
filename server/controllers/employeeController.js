const Employee = require('../model/employeeModel');
const jwt = require("jsonwebtoken");

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

const addEmployee = async (req, res) => {
    const { name, email, jobRole, startDate } = req.body;

    try {
        // Validate required fields
        if (!name || !email || !jobRole) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Find the employee with the highest employeeId
        const lastEmployee = await Employee.findOne({})
            .sort('-employeeId')
            .select('employeeId');
        
        // Calculate new employeeId (increment by 1 from the last one, or start with 1 if no employees exist)
        let newEmployeeNumber;
        if (lastEmployee) {
            // Extract the numeric part from the employeeId (e.g., "016" from "EMP016")
            const lastNumber = parseInt(lastEmployee.employeeId.replace(/\D/g, ''));
            newEmployeeNumber = lastNumber + 1;
        } else {
            newEmployeeNumber = 1;
        }

        const existingEmployee = await Employee.findOne({ email });
        if (existingEmployee) {
            return res.status(400).json({ error: "Employee with this email already exists" });
        }
        
        // Format the new employeeId with leading zeros and EMP prefix
        const newEmployeeId = `EMP${String(newEmployeeNumber).padStart(3, '0')}`;

        // Create new employee with default values
        const newEmployee = new Employee({
            employeeId: newEmployeeId,
            name,
            email,
            startDate: startDate || new Date(),
            status: 'Active',
            jobRole,
            ptoUsed: 0
        });
        
        await newEmployee.save();
        const token = jwt.sign({_id: newEmployee._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.status(201).json({
            message: "Employee added successfully",
            employee: newEmployee,
            token
        });

    } catch (error) {
        console.error("Error adding employee:", error);
        if (error.code === 11000) {
            return res.status(400).json({ error: "Email already exists" });
        }
        res.status(500).json({ error: error.message });
    }
};

const employeeLogin = async (req, res) => {
    const { employeeId } = req.body;
    
    if (!employeeId) {
        return res.status(400).json({ error: "Employee ID is required" });
    }
    
    const formattedEmployeeId = employeeId.toUpperCase();
    
    try {
        const employee = await Employee.findOne({ employeeId: formattedEmployeeId });
        if (!employee) {
            return res.status(400).json({ error: "Invalid employee ID" });
        }

        const token = jwt.sign({ _id: employee._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        
        res.json({ 
            message: "Employee logged in successfully",
            employee,
            token 
        });
    }
    catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "An error occurred during login" });
    }
};

const getEmployeebyID = async (req, res) => {
    const { employeeId } = req.params;

    try {
        const employee = await Employee.findOne({ employeeId });
        if (!employee) {
            return res.status(404).json({ error: "Employee not found" });
        }
        res.json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getEmployee,
    getAllEmployees,
    addEmployee,
    getEmployeebyID,
    employeeLogin
};