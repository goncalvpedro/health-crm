const prisma = require("../../prisma/client");
const jwt = require("../utils/jwt");

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  ensureAuth: (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) return res.status(401).json({ error: "[ Error ] Unauthorized. "});

    const token = authHeader.split(' ')[1]

    try {
      const { id } = jwt.verifyToken(token)
      const user = prisma.users.findUnique({ where: { id: id}})

      if (!user) return res.status(404).json({ error: "[ Error ] User not found."});

      req.user = user
      next()
    } catch (err) {
      return res.status(500).json({ error: `[ Error ] Internal error (ensureAuth): ${err}`})
    }
  }
};
