const express = require("express");
const { createAppointment, getAppointments } = require("../controllers/appointmentController");
const { adminRegister, adminLogin, resetPassword } = require("../controllers/adminController");
const authMiddleware = require("../middleare/authMiddleware");
const { createContact, getContacts } = require("../controllers/contactController");
const router = express.Router();

router.get("/", (req, res) => res.json({msg: "working"}))

router.post("/createAppointment", createAppointment )
router.get("/getAppointments", authMiddleware, getAppointments)
router.post("/admin/register", adminRegister)
router.post("/admin/login", adminLogin)
router.post("/admin/reset-password", resetPassword)
router.get("/getContacts", getContacts)
router.post("/createContact", createContact)

module.exports = router