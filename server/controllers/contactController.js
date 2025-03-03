const Contact = require("../model/contactModel");
const mongoose = require("mongoose");

const createContact = async (req, res) => {
    const { firstName, lastName, email, number, message } = req.body;
    try {
        const contact = await Contact.create({
            firstName,
            lastName,
            email,
            number,
            message,
        }); 
        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({}).sort({createdAt: -1});
        res.status(200).json(contacts);
    } catch (error) {   
        res.status(400).json({ error: error.message });
    }    
};

module.exports = { createContact, getContacts };    