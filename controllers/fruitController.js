const Fruit = require("../models/fruit");

//Controler Functions

// Get All Fruits
const getAllFruits = async (req, res) => {
  try {
    // Find all fruits
    const fruits = await Fruit.find();
    // Send the fruit document as a JSON response
    res.json(fruits);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Get Fruit by ID
const getFruitById = async (req, res) => {
  try {
    // Validate the provided fruitID
    const fruitID = req.params.id;
    if (!fruitID) {
      return res.status(400).json({ error: "Fruit ID is required" });
    }

    // Find the fruit by ID
    const fruit = await Fruit.findById(fruitID);

    // Check if the fruit exists
    if (!fruit) {
      return res.status(404).json({ error: "Fruit not found" });
    }
    // Send the fruit document as a JSON response
    res.json(fruit);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
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
      return res.status(400).json({ error: "Fruit ID is required" });
    }

    // Check if the fruit exists
    const existingFruit = await Fruit.findById(fruitID);
    if (!existingFruit) {
      return res.status(404).json({ error: "Fruit not found" });
    }

    // Delete the fruit
    const deletedFruit = await Fruit.findByIdAndDelete(fruitID);

    // Send a success response
    res.json({ success: "Record has been deleted successfully" });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getAllFruits,
  getFruitById,
  createFruit,
  updateFruit,
  deleteFruit,
};
