require("dotenv").config();
const mongoose = require("mongoose");

const dbConnector = async () => {
  let db = await mongoose.connect(process.env.DB_URL);
  if (!db) return console.log("Database I Not Connected.");
  return console.log("Database Is Connected.");
};

module.exports = dbConnector ;