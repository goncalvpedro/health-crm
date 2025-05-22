const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.JWT_SECRET

module.exports = {
  signToken: (id, email) => {

    const payload = {
      id: id,
      email: email,
    };

    try {
      return jwt.sign(payload, SECRET, { expiresIn: "1d" });
    } catch (err) {
      return { error: `[ Error ] JWT error: ${err}` };
    }
  },

  verifyToken: (token) => {
    return jwt.verify(token, SECRET);
  },
};
