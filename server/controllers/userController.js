const User = require('../model/userModel');

const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({ createdAt: -1 });
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }   
}

const addUser = async (req, res) => {
    const { name, email, jobRole, dateJoined } = req.body;

    try {
        if (!name || !email || !jobRole || !dateJoined) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const user = await User.create({ name, email, jobRole, dateJoined });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const searchByName = async (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({ error: "Name query is required" });
    }

    try {
        const users = await User.find({
            name: { $regex: new RegExp(name, 'i') }
        });

        if (users.length === 0) {
            return res.status(404).json({ message: "No users found with that name" });
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const searchByJobRole = async (req, res) => {
    const { role } = req.query;

    if (!role) {
        return res.status(400).json({ error: "Job role query is required" });
    }

    try {
        const users = await User.find({
            jobRole: { $regex: new RegExp(role, 'i') }
        });

        if (users.length === 0) {
            return res.status(404).json({ message: "No users found with that job role" });
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getUsers, addUser, searchByName, searchByJobRole };