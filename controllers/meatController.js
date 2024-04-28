const Meat = require("../models/meats");

//Controler Functions

//Get All Meats
const getAllMeats = async (req, res) => {
    try {
        // Find all meats
        const meats = await Meat.find();
        // Send the meat document as a JSON response
        res.json(meats);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

//Export Controler Functions
module.exports = {
    getAllMeats,
}