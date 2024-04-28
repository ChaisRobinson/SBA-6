require("dotenv").config();
// Configure express
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const databaseConnection = require("./conifg/databaseConnection");

const cors = require("cors");
app.use(express.json());
app.use(cors());

// Controllers
const fruitsController = require("./controllers/fruitController");
const Fruit = require("./models/fruit");

// Connect to MongoDB
databaseConnection();

//Routes
//Home Page
app.get("/", (req, res) => {
  res.send("This is the root of our server");
});
// ------------------------------------------------------------------Start Fruits Routes
// ------------------------------------------------------------------
// ------------------------------------------------------------------Get Fruits
// Get all Fruits
app.get("/fruits", fruitsController.fetchAllFruits);
// Get Fruit by ID
app.get("/fruits/:id", fruitsController.getFruitById);

//------------------------------------------------------------------Post Fruits
app.post("/fruits", fruitsController.createFruit);

// ------------------------------------------------------------------Update Fruits
app.put("/fruits/:id", fruitsController.updateFruit);

// ------------------------------------------------------------------Delete Fruits
app.delete("/fruits/:id", fruitsController.deleteFruit);

// ------------------------------------------------------------------End Fruits Routes

app.listen(PORT, () =>
  console.log(`Express server is listening on port ${PORT}`)
);
