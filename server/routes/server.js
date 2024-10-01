const express = require("express");
const { createAppointment, getAppointments } = require("../controllers/appointmentController")
const router = express.Router();

router.get("/", (req, res) => res.json({msg: "working"}))

router.post("/createAppointment", createAppointment )
router.get("/getAppointments", getAppointments)

module.exports = router