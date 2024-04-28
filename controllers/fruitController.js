const Fruit = require("../models/fruit");

//Controler Functions


//Get All Fruits

const fetchAllFruits = async (req, res) => {
    const fruits = await Fruit.find();
    res.json(fruits);
}



module.exports ={
    fetchAllFruits,
};