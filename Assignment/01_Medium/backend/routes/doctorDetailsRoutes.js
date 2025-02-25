const express = require("express");
const router = express.Router();

// Import the doctor controller functions
const { registerDoctor, getAllDoctors, getDoctorbyId } = require("../controllers/doctorDetailsController");

// Import the JWT middleware to protect routes
const { validatetoken } = require("../middlewares/jwtmiddleware");

// Protected route: Register a new doctor (requires JWT authentication)
router.post("/register", validatetoken, registerDoctor);

// Public routes: Get all doctors and get doctor by ID
router.get("/", getAllDoctors);
router.get("/:id", getDoctorbyId);

module.exports = router;