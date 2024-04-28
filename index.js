require("dotenv").config();
// Configure requirements for database connection
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const databaseConnection = require("./conifg/databaseConnection");

// Middleware
const cors = require("cors");
app.use(express.json());
app.use(cors());

// Controllers
const fruitsController = require("./controllers/fruitController");
const Fruit = require("./models/fruit");
const vegetablesController = require("./controllers/vegetablesController");
const Vegetable = require("./models/vegetables");

// Connect to MongoDB
databaseConnection();

//Routes
//Home Page
app.get("/", (req, res) => {
  res.send("This is the root of our server");
});

// ------------------------------------------------------------------Start Fruits Routes

// ------------------------------------------------------------------Get Fruits

app.get("/fruits", fruitsController.getAllFruits);
// ------------------------------------------------------------------Get Fruits by ID

app.get("/fruits/:id", fruitsController.getFruitById);

//------------------------------------------------------------------Post Fruits

app.post("/fruits", fruitsController.createFruit);

// ------------------------------------------------------------------Update Fruits
app.put("/fruits/:id", fruitsController.updateFruit);

// ------------------------------------------------------------------Delete Fruits
app.delete("/fruits/:id", fruitsController.deleteFruit);

// ------------------------------------------------------------------End Fruits Routes

// ------------------------------------------------------------------Start Vegetables Routes

// ------------------------------------------------------------------Get Vegetables

app.get("/vegetables", vegetablesController.getAllVegetables);
//  ------------------------------------------------------------------Get Vegetable by ID
app.get("/vegetables/:id", vegetablesController.getVegetableById);

//------------------------------------------------------------------Post Vegetables

// ------------------------------------------------------------------Update Vegetables

// ------------------------------------------------------------------Delete Vegetables

// ------------------------------------------------------------------End Vegetables Routes

// Start server and listen on port
app.listen(PORT, () =>
  console.log(`Express server is listening on port ${PORT}`)
);
