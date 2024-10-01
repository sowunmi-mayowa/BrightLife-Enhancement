require("dotenv").config();
const Appointment = require("../model/appointmentModel");
const mongoose = require("mongoose") 
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})
console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
const sendEmail = (appointmentData) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, 
        to: appointmentData.email,     
        subject: 'Appointment Confirmation',
        text: `Hello ${appointmentData.name},\n\nYour appointment is confirmed for ${appointmentData.date} at ${appointmentData.time}.\n\nThank you!`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const createAppointment = async(req, res) => {
    const {name, email, phoneNumber, date, time} = req.body
    try{
        const existingAppointment = await Appointment.findOne({ date, time });
        if(existingAppointment){
            return res.status(400).json({error: "This time slot is already booked. Please choose another time."});
        }
        // if (!name || !email || !phoneNumber || !date || !time) {
        //     return res.status(400).json({ error: "All fields are required" });
        //   }

        const appointment = await Appointment.create({name, email, phoneNumber, date, time})
        sendEmail({ name, email, date, time });
        res.status(200).json({appointment})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const getAppointments = async(req, res) => {
    const appointment = await Appointment.find({}).sort({createdAt: -1})
    res.status(200).json(appointment)
}

module.exports = {
    createAppointment,
    getAppointments
}