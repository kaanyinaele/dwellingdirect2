const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const { verifyFirebaseToken } = require("./middleware/firebaseAuthMiddleware"); // Make sure this is the right middleware
const errorHandler = require("./middleware/errorHandler");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize the database connection
dbConnect();

// Middleware setup

// Enable CORS
app.use(cors());

// JSON Body Parser Middleware
app.use(express.json());

// Request logging middleware
app.use(morgan("dev"));

// Security headers using Helmet
app.use(helmet());

// Rate limiting to avoid DDoS or brute force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
});
app.use(limiter);

// Authentication and Property Routes
app.use("/api/auth", authRoutes); // Routes for user authentication
app.use("/api/properties", verifyFirebaseToken, propertyRoutes); // Secure property routes with Firebase authentication

// Basic Route to test the server
app.use("/", (req, res) => {
  res.send("Hello from the Dwelling Direct Backend!");
});

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
