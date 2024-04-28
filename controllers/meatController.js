const Meat = require("../models/meats");

//Controler Functions

//Get All Meats
const getAllMeats = async (req, res) => {
  try {
    // Find all meats
    const meats = await Meat.find();
    // Send the meat document as a JSON response
    res.json(meats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//Get Meat by ID
const getMeatById = async (req, res) => {
  try {
    // Validate the provided meatID
    const meatID = req.params.id;
    if (!meatID) {
      return res.status(400).json({ error: "Meat ID is required" });
    }

    // Find the meat by ID
    const meat = await Meat.findById(meatID);

    // Check if the meat exists
    if (!meat) {
      return res.status(404).json({ error: "Meat not found" });
    }
    // Send the meat document as a JSON response
    res.json(meat);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//Create Meat
const createMeat = async (req, res) => {
  try {
    // Validate request body
    const { name, color, taste } = req.body;
    if (!name || !color || !taste) {
      return res
        .status(400)
        .json({ error: "Name, color, and taste are required" });
    }

    // Create a new meat document
    const newMeatDoc = await Meat.create({ name, color, taste });

    // Send the newly created meat document as a JSON response
    res.status(201).json(newMeatDoc);
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//Update Meat
const updateMeat = async (req, res) => {
  try {
    // Validate request body
    const meatID = req.params.id;
    const { name, color, taste } = req.body;
    // Update the meat document
    const updatedMeat = await Meat.findByIdAndUpdate(
      meatID,
      { name, color, taste },
      { new: true }
    );
    // Send an error response if the meat is not found
    if (!updatedMeat) {
      return res.status(404).send("Meat not found");
    }
    // Send the updated meat document as a JSON response
    res.json(updatedMeat);
  } catch (error) {
    res.status(500).send(error.message || "Error updating meat");
  }
};

//Delete Meat
const deleteMeat = async (req, res) => {
  try {
    // Validate the provided meatID
    const meatID = req.params.id;
    if (!meatID) {
      return res.status(400).json({ error: "Meat ID is required" });
    }

    // Check if the meat exists
    const existingMeat = await Meat.findById(meatID);
    if (!existingMeat) {
      return res.status(404).json({ error: "Meat not found" });
    }

    // Delete the meat
    const deletedMeat = await Meat.findByIdAndDelete(meatID);

    // Send a success response
    res.json({ success: "Record has been deleted successfully" });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//Export Controler Functions
module.exports = {
  getAllMeats,
  getMeatById,
  createMeat,
  updateMeat,
  deleteMeat,
};
