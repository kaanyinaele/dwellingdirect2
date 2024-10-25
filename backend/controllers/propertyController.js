const Property = require("../models/Property");

// Create a new property
exports.createProperty = async (req, res) => {
  try {
    const { title, price, description, address, imageUrl, owner } = req.body;

    const property = new Property({
      title,
      price,
      description,
      address,
      imageUrl,
      owner,
    });

    const savedProperty = await property.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(500).json({ error: "Failed to create property" });
  }
};

// Get all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate("owner");
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve properties" });
  }
};

// Get a property by ID
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate("owner");
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve property" });
  }
};

// Update a property by ID
exports.updateProperty = async (req, res) => {
  try {
    const { title, price, description, address, imageUrl } = req.body;

    const property = await Property.findByIdAndUpdate(
      req.params.id,
      { title, price, description, address, imageUrl },
      { new: true }
    );

    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: "Failed to update property" });
  }
};

// Delete a property by ID
exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete property" });
  }
};

// Get properties with filters
exports.filterProperties = async (req, res) => {
  try {
    const { minPrice, maxPrice, location, propertyType } = req.query;

    // Create a filter object
    const filter = {};

    // Filter by price range
    if (minPrice && maxPrice) {
      filter.price = { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) };
    } else if (minPrice) {
      filter.price = { $gte: parseFloat(minPrice) };
    } else if (maxPrice) {
      filter.price = { $lte: parseFloat(maxPrice) };
    }

    // Filter by location
    if (location) {
      filter.address = new RegExp(location, "i"); // Case-insensitive search by location
    }

    // Filter by property type
    if (propertyType) {
      filter.propertyType = propertyType; // Assuming propertyType is a field in the Property model
    }

    // Fetch properties based on the filter criteria
    const properties = await Property.find(filter).populate("owner");

    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve properties" });
  }
};
