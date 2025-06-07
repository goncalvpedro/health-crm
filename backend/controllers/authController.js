const prisma = require("../../prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");

module.exports = {
  // POST /auth/register
  registerUser: async (req, res) => {
    const { username, email, password } = req.body;

    try {
      const existing = await prisma.users.findUnique({
        where: { username: username },
      });
      if (existing) {
        return res
          .status(400)
          .json({ error: "[ Error ] User already exists." });
      }

      const hashedPwd = bcrypt.hashSync(password, 10);

      const user = await prisma.users.create({
        data: {
          username: username,
          email: email,
          passwordHash: hashedPwd,
        },
      });

      const token = jwt.signToken(user.id, user.email);
      res.status(201).json({
        token,
        message: "[ Success ] User registered successfully",
      });
    } catch (err) {
      return res.status(500).json({
        error: `[ Error ] Internal error (registerUser): ${err.message}`,
      });
    }
  },

  // POST /auth/login
  loginUser: async (req, res) => {
    const { username, email, password } = req.body;

    try {
      const user = await prisma.users.findUnique({ where: { username } });
      if (!user) {
        return res.status(404).json({ error: "[ Error ] User not found." });
      }

      const valid = await bcrypt.compare(password, user.passwordHash);
      if (!valid) {
        return res.status(400).json({ error: "[ Error ] Invalid credentials" });
      }

      const token = jwt.signToken(user.id, user.email);
      res.json({ token });
    } catch (err) {
      return res.status(500).json({
        error: `[ Error ] Internal error (loginUser): ${err.message}`,
      });
    }
  },

  // GET /auth/users
  listUsers: async (req, res) => {
    try {
      const users = await prisma.users.findMany({
        orderBy: { id: "asc" },
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          createdAt: true,
        },
      });
      return res.status(200).json({ users });
    } catch (err) {
      return res.status(500).json({
        error: `[ Error ] Internal error (listUsers): ${err.message}`,
      });
    }
  },

  // PUT /auth/users/:id
  updateUser: async (req, res) => {
    let { id } = req.params;
    let { newEmail, newPassword, newRole } = req.body;

    id = parseInt(id);
    try {
      const user = await prisma.users.findUnique({ where: { id } });
      if (!user) {
        return res.status(400).json({ error: "[ Error ] User not found." });
      }

      if (!newPassword) {
        newPassword = null;
      }

      if (!newEmail) {
        newEmail = user.email;
      }

      if (!newRole) {
        newRole = user.role;
      }

      const hashedPwd = newPassword
        ? bcrypt.hashSync(newPassword, 10)
        : user.passwordHash;

      const updatedUser = await prisma.users.update({
        where: { id },
        data: {
          email: newEmail,
          passwordHash: hashedPwd,
          role: newRole ?? user.role,
        },
      });

      res.status(200).json({
        user: { ...updatedUser, passwordHash: undefined },
        message: "[ Success ] User updated successfully",
      });
    } catch (err) {
      res.status(500).json({
        error: `[ Error ] Internal error (updateUser): ${err.message}`,
      });
    }
  },

  // DELETE /auth/users/:id
  deleteUser: async (req, res) => {
    let { id } = req.params;

    try {
      id = parseInt(id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "[ Error ] Invalid ID format" });
      }

      const existingUser = await prisma.users.findUnique({ where: { id } });
      if (!existingUser) {
        return res.status(404).json({ error: "[ Error ] User not found." });
      }

      const deleted = await prisma.users.delete({ where: { id } });

      return res.status(200).json({
        user: {
          id: deleted.id,
          username: deleted.username,
        },
        message: "[ Success ] User deleted successfully",
      });
    } catch (err) {
      return res.status(500).json({
        error: `[ Error ] Internal error (deleteUser): ${err.message}`,
      });
    }
  },
};
