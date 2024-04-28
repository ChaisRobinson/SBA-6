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


  //Export Controler Functions
  module.exports = {
    getAllVegetables,
  }