const express = require("express");
const authController = require("../controllers/authController");
const { ensureAuth } = require("../middleware/auth-middleware");

const userRoutes = express.Router();

userRoutes.get("/auth/users", authController.listUsers);
userRoutes.post("/auth/register", authController.registerUser);
userRoutes.post("/auth/login", authController.loginUser);
userRoutes.put("/auth/users/:id", authController.updateUser);
userRoutes.delete("/auth/users/:id", authController.deleteUser);

module.exports = userRoutes;
