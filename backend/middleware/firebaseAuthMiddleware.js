// middleware/firebaseAuthMiddleware.js

const admin = require("firebase-admin");

const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const idToken = authHeader.split("Bearer ")[1]; // Extract the Firebase token

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.user = decodedToken; // Attach the decoded token to the request object
      next();
    } catch (error) {
      console.error("Error verifying Firebase token:", error);
      return res.status(401).json({ message: "Unauthorized" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" }); // No token provided
  }
};

module.exports = { verifyFirebaseToken };
