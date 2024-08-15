const Property = require("../models/Property");

// Get all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single property by ID
exports.getProertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) res.status(404).json({ message: "property not found" });
    res.json(property);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProperty = async (req, res) => {
  const property = new Property({
    name: req.body.name,
    location: req.body.location,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
  });
  try {
    const newProperty = await property.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a property
exports.updateProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property)
      return res.status(404).json({ message: "property not found" });

    property.name = req.body.name || property.name;
    property.location = req.body.location || property.location;
    property.price = req.body.price || property.price;
    property.image = req.body.image || property.image;
    property.description = req.body.description || property.description;

    const updatedProperty = await property.save();
    res.json(updatedProperty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
