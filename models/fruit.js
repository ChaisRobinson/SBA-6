const mongoose = require("mongoose");
//Create Fruit Schema
const fruitSchema = new mongoose.Schema({
  fruit: String,
  color: String,
  taste: String,
});
//Create Fruit Model
const Fruit = mongoose.model("Fruit", fruitSchema);
//Export Fruit Model
module.exports = Fruit;
