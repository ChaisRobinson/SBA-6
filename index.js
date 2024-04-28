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
const notesController = require("./controllers/fruitController");
const Fruit = require("./models/fruit");

// Connect to MongoDB
databaseConnection();

//Routes
//Home Page
app.get("/", (req, res) => {
  res.send("This is the root of our server");
});

// ------------------------------------------------------------------Get Fruits
// Get all Fruits
app.get("/fruits", notesController.fetchAllFruits);
// Get Fruit by ID
app.get("/fruits/:id", notesController.getFruitById);

//------------------------------------------------------------------Post Fruits

// ------------------------------------------------------------------Update Fruits

// ------------------------------------------------------------------Delete Fruits

// ------------------------------------------------------------------End Fruits

app.listen(PORT, () =>
  console.log(`Express server is listening on port ${PORT}`)
);
