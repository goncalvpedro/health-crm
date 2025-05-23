const express = require("express");
const authController = require("../controllers/authController");
const { ensureAuth } = require("../middleware/auth-middleware");
const patientController = require("../controllers/patientController");

const router = express.Router();

router.get("/auth/users", authController.listUsers);
router.get("/auth/test", ensureAuth, (req, res) => res.json({ message: "ok" }));

router.post("/auth/register", authController.registerUser);
router.post("/auth/login", authController.loginUser);

router.put("/auth/users/:id", authController.updateUser);

router.delete("/auth/users/:id", authController.deleteUser);

router.get("/patients", patientController.listPatients);
router.get("/patients/:id", patientController.getPatientById);
router.post("/patients", patientController.createPatient);
router.put("/patients/:id", patientController.updatePatient);
router.delete("/patients/:id", patientController.deletePatient);

module.exports = router;
