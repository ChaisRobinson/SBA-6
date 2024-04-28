const Fruit = require("../models/fruit");

//Controler Functions

//Get All Fruits
const fetchAllFruits = async (req, res) => {
  const fruits = await Fruit.find();
  res.json(fruits);
};

//Get Fruit by ID
const getFruitById = async (req, res) => {
  const fruitID = req.params.id;
  const fruit = await Fruit.findById(fruitID);
  res.json(fruit);
};

//Create Fruit
const createFruit = async (req, res) => {
  try {
    // Validate request body
    const { name, color, taste } = req.body;
    if (!name || !color || !taste) {
      return res
        .status(400)
        .json({ error: "Name, color, and taste are required" });
    }

    // Create a new fruit document
    const fruit = await Fruit.create({ name, color, taste });

    // Send the newly created fruit document as a JSON response
    res.status(201).json(fruit);
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//Update Fruit
const updateFruit = async (req, res) => {
  try {
    // Validate request body
    const fruitID = req.params.id;
    const { name, color, taste } = req.body;
    // Update the fruit document
    const updatedFruit = await Fruit.findByIdAndUpdate(
      fruitID,
      { name, color, taste },
      { new: true }
    );
    // Send an error response if the fruit is not found
    if (!updatedFruit) {
      return res.status(404).send("Fruit not found");
    }
    // Send the updated fruit document as a JSON response
    res.json(updatedFruit);
  } catch (error) {
    res.status(500).send(error.message || "Error updating fruit");
  }
};

//Delete Fruit
const deleteFruit = async (req, res) => {
    try {
      // Validate the provided fruitID
      const fruitID = req.params.id;
      if (!fruitID) {
        return res.status(400).json({ error: 'Fruit ID is required' });
      }
  
      // Check if the fruit exists
      const existingFruit = await Fruit.findById(fruitID);
      if (!existingFruit) {
        return res.status(404).json({ error: 'Fruit not found' });
      }
  
      // Delete the fruit
      const deletedFruit = await Fruit.findByIdAndDelete(fruitID);
  
      // Send a success response
      res.json({ success: 'Record has been deleted successfully' });
    } catch (err) {
      // Handle errors
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }

module.exports = {
  fetchAllFruits,
  getFruitById,
  createFruit,
  updateFruit,
  deleteFruit,
};
