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

//Create Fruit
const createFruit = async (req, res) => {
    console.log(`BODY: ${req.body}`);
    const { name, color, taste } = req.body;
    const fruit = await Fruit.create({ name, color, taste });
    res.json(fruit);
}


module.exports ={
    fetchAllFruits,
    getFruitById,
    createFruit,
};