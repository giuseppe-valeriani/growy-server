require("dotenv").config();
const jwt = require("jsonwebtoken");

function generateToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: "60m" });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No access" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN, (error, user) => {
    if (error) {
      return res.status(403).json({ message: "Forbidden" });
    }
    req.user = user;
    next();
  });
}

module.exports = { generateToken, authenticateToken };
