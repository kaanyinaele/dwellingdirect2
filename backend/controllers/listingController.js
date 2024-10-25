const Listing = require("../models/Listing");

// Create a new listing
exports.createListing = async (req, res) => {
  try {
    const {
      propertyTitle,
      state,
      address,
      description,
      water,
      wifi,
      power,
      rentType,
      rentPrice,
      agencyPrice,
      images,
      video,
      contactEmail,
      contactPhone,
    } = req.body;

    // Create a new listing object
    const newListing = new Listing({
      propertyTitle,
      state,
      address,
      description,
      water,
      wifi,
      power,
      rentType,
      rentPrice,
      agencyPrice,
      images,
      video,
      contactEmail,
      contactPhone,
      createdBy: req.user._id, // Assuming you have user authentication
    });

    // Save the listing to the database
    const savedListing = await newListing.save();
    res
      .status(201)
      .json({ message: "Listing created successfully", savedListing });
  } catch (error) {
    res.status(500).json({ message: "Error creating listing", error });
  }
};

// Get all listings
exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find().populate("createdBy", "name email");
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching listings", error });
  }
};

// Get a single listing by ID
exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: "Error fetching listing", error });
  }
};

// Update a listing
exports.updateListing = async (req, res) => {
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedListing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res
      .status(200)
      .json({ message: "Listing updated successfully", updatedListing });
  } catch (error) {
    res.status(500).json({ message: "Error updating listing", error });
  }
};

// Delete a listing
exports.deleteListing = async (req, res) => {
  try {
    const deletedListing = await Listing.findByIdAndDelete(req.params.id);
    if (!deletedListing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.status(200).json({ message: "Listing deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting listing", error });
  }
};
