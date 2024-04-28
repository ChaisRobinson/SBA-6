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

//Export Controler Functions
module.exports = {
    getAllMeats,
    getMeatById,    
};