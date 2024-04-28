const Vegtable = require("../models/vegetables");

//Controler Functions

// Get All Vegetables
const getAllVegetables = async (req, res) => {
    try {
      // Find all vegtables
      const vegetables = await Vegtable.find();
      // Send the vegtable document as a JSON response
      res.json(vegetables);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  };

  //Get Vegetable by ID
  const getVegetableById = async (req, res) => {
    try {
      // Validate the provided vegtableID
      const vegtableID = req.params.id;
      if (!vegtableID) {
        return res.status(400).json({ error: "Vegtable ID is required" });
      }
  
      // Find the vegtable by ID
      const vegtable = await Vegtable.findById(vegtableID);
  
      // Check if the vegtable exists
      if (!vegtable) {
        return res.status(404).json({ error: "Vegtable not found" });
      }
      // Send the vegtable document as a JSON response
      res.json(vegtable);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  };

  
  //Create Vegetable
const createVegetable = async (req, res) => {
  try {
    // Validate request body
    const { name, color, taste } = req.body;
    if (!name || !color || !taste) {
      return res
        .status(400)
        .json({ error: "Name, color, and texture are required" });
    }

    // Create a new vegetable document
    const newVegetableDoc = await Vegtable.create({ name, color, taste });

    // Send the newly created vegetable document as a JSON response
    res.status(201).json(newVegetableDoc);
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};



  //Export Controler Functions
  module.exports = {
    getAllVegetables,
    getVegetableById,
    createVegetable,
  }