const mongoose = require("mongoose");
//Create Vegetable Schema
const vegetableSchema = new mongoose.Schema({
  name: String,
  color: String,
  taste: String,
});
//Create Vegtable Model
const Vegetable = mongoose.model("Vegetable", vegetableSchema);
//Export Vegtable Model
module.exports = Vegetable;
