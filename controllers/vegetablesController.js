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
      // Validate the provided fruitID
      const vegtableID = req.params.id;
      if (!vegtableID) {
        return res.status(400).json({ error: "Vegtable ID is required" });
      }
  
      // Find the fruit by ID
      const vegtable = await Vegtable.findById(vegtableID);
  
      // Check if the fruit exists
      if (!vegtable) {
        return res.status(404).json({ error: "Vegtable not found" });
      }
      // Send the fruit document as a JSON response
      res.json(vegtable);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  };


  //Export Controler Functions
  module.exports = {
    getAllVegetables,
    getVegetableById,
  }