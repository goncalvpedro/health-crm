const express = require("express");
const userRoutes = require("./userRoutes");
const patientRoutes = require("./patientRoutes");
const { ensureAuth } = require("../middleware/auth-middleware");

const router = express.Router();

router.use(userRoutes);
router.use(patientRoutes);

router.get("/auth/test", ensureAuth, (req, res) => res.json({ message: "ok" }));

module.exports = router;
