import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  // your code
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("email is=", email);
    // check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // find user by email
    const [rows] = await db.query("SELECT * FROM admin WHERE email = ?", [email]);
    console.log("Login attempt:", email, password);
    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = rows[0];
    console.log("User from DB:", user);

    // plain password check (consider using bcrypt for production)
    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },   // payload
      process.env.JWT_SECRET,              // secret key
      { expiresIn: "1h" }                  // token expiry
    );

    return res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username
      }
    });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

const dashboard = async (req, res) => {
  // your code
};

export default {
  register,
  login,
  dashboard
};
