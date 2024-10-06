require("dotenv").config();
const bcrypt = require("bcrypt");
const Admin = require("../model/adminModel");
const jwt = require("jsonwebtoken");
const e = require("express");

const adminRegister = async(req, res) => {
    const {email, password} = req.body;

    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const admin = new Admin({
            email,
            password: hashedPassword
        })

        await admin.save();
        res.status(201).json({message: "admin registered successfuly"});
        
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const adminLogin = async(req, res) => {
    const {email, password} = req.body;

    try{
        const admin = await Admin.findOne({email});
        if(!admin) return res.status(400).json({error: "Invalid email or password"});

        const validPassword = await bcrypt.compare(password, admin.password);
        if(!validPassword) return res.status(400).json({error: "Invalid email or password"});

        const token = jwt.sign({_id: admin._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.json({token});
        console.log(token)
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    adminRegister,
    adminLogin
}