require("dotenv").config();

const mongoose = require("mongoose");

const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Currently connected to Chais' Database");
  } catch (error) {
    console.error(`Error connecting to Mongo Database: ${error.message}`);
  }
};

module.exports = databaseConnection;
