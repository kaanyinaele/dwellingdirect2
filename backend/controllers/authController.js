// controllers/authController.js

const User = require("../models/User"); // Assuming you're using a User model
const firebaseAdmin = require("firebase-admin"); // Import Firebase Admin SDK if needed

// Register function
exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Example: Save to MongoDB using Mongoose
    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
};

// Login function
exports.loginUser = async (req, res) => {
  try {
    // Logic to login user (e.g., validate credentials)
    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error logging in user" });
  }
};
