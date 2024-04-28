const Fruit = require("../models/fruit");

//Controler Functions


//Get All Fruits
const fetchAllFruits = async (req, res) => {
    const fruits = await Fruit.find();
    res.json(fruits);
}

//Get Fruit by ID
const getFruitById = async (req, res) => {
    const fruitID = req.params.id;
    const fruit = await Fruit.findById(fruitID);
    res.json(fruit);
}




module.exports ={
    fetchAllFruits,
    getFruitById,
};