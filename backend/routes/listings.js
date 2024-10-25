const express = require("express");
const router = express.Router();
const {
  createListing,
  getAllListings,
  getListingById,
  updateListing,
  deleteListing,
} = require("../controllers/listingController");
const { authenticateUser } = require("../middleware/auth"); // Assuming you have authentication middleware

// Create a new listing
router.post("/", authenticateUser, createListing);

// Get all listings
router.get("/", getAllListings);

// Get a listing by ID
router.get("/:id", getListingById);

// Update a listing
router.put("/:id", authenticateUser, updateListing);

// Delete a listing
router.delete("/:id", authenticateUser, deleteListing);

module.exports = router;
