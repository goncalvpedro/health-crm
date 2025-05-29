const express = require("express");

const router = express.Router();
router.get("/auth/test", ensureAuth, (req, res) => res.json({ message: "ok" }));







module.exports = router;
