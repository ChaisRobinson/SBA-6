const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    color: String,
    fruit: String,
    taste: String,

});


const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;