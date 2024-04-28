const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  fruit: String,
  color: String,
  taste: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
