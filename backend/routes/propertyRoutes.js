const express = require("express");
const {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
  filterProperties,
} = require("../controllers/propertyController");
const router = express.Router();

// POST: Create a new property listing
router.post("/", createProperty);

// GET: Retrieve all property listings with optional filters
router.get("/", filterProperties); // This will now handle filtered queries

// GET: Retrieve a single property by ID
router.get("/:id", getPropertyById);

// PUT: Update a property listing by ID
router.put("/:id", updateProperty);

// DELETE: Delete a property listing by ID
router.delete("/:id", deleteProperty);

module.exports = router;
