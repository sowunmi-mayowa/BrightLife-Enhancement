const express = require("express");
const { createAppointment, getAppointments } = require("../controllers/appointmentController");
const { adminRegister, adminLogin, resetPassword } = require("../controllers/adminController");
const authMiddleware = require("../middleare/authMiddleware");
const { createContact, getContacts } = require("../controllers/contactController");
const { getUsers, addUser, searchByJobRole, searchByName } = require("../controllers/userController");
const { getEmployee, getAllEmployees, addEmployee, employeeLogin } = require("../controllers/employeeController");
const { addProcurementRequest, getProcurementRequests } = require("../controllers/procurementController");

const router = express.Router();

router.get("/", (req, res) => res.json({msg: "working"}))

router.post("/createAppointment", createAppointment )
router.get("/getAppointments", authMiddleware, getAppointments)
router.post("/admin/register", adminRegister)
router.post("/admin/login", adminLogin)
router.post("/admin/reset-password", resetPassword)
router.get("/getContacts", getContacts)
router.post("/createContact", createContact)
router.get("/getusers", getUsers)
router.post("/addUser", addUser)
router.get('/users/search/name', searchByName);
router.get('/users/search/job', searchByJobRole);
router.get('/employee/search', getEmployee);
router.get('/employees', getAllEmployees);
router.post('/employee/addEmployee', addEmployee);
router.post('/employee/login', employeeLogin);
router.post('/employee/addProcurementRequest', addProcurementRequest);
router.get('/employee/getprocurements', getProcurementRequests)

module.exports = router