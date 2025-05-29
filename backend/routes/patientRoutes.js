const express = require('express')
const { ensureAuth } = require("../middleware/auth-middleware");
const patientController = require("../controllers/patientController");

const patientRouter = express.Router()

patientRouter.get("/patients", patientController.listPatients);
patientRouter.get("/patients/:id", patientController.getPatientById);
patientRouter.post("/patients", patientController.createPatient);
patientRouter.put("/patients/:id", patientController.updatePatient);
patientRouter.delete("/patients/:id", patientController.deletePatient);

module.exports = patientRouter;