require("dotenv").config();
// Require mongoose
const mongoose = require("mongoose");
// Connect to MongoDB
const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Currently connected to Chais' Database");
  } catch (error) {
    console.error(`Error connecting to Mongo Database: ${error.message}`);
  }
};
// Export databaseConnection
module.exports = databaseConnection;
