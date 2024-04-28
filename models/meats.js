const mongoose = require("mongoose");
//Create Meat Schema
const meatSchema = new mongoose.Schema({
  name: String,
  color: String,
  taste: String,
});
//Create Meat Model
const Meat = mongoose.model("Meat", meatSchema);
//Export Meat Model
module.exports = Meat;
