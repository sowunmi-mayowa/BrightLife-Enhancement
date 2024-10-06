const express = require("express");
const { createAppointment, getAppointments } = require("../controllers/appointmentController");
const { adminRegister, adminLogin } = require("../controllers/adminController");
const authMiddleware = require("../middleare/authMiddleware");
const router = express.Router();

router.get("/", (req, res) => res.json({msg: "working"}))

router.post("/createAppointment", createAppointment )
router.get("/getAppointments", authMiddleware, getAppointments)
router.post("/admin/register", adminRegister)
router.post("/admin/login", adminLogin)

module.exports = router