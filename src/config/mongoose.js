require("dotenv").config();

const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => console.log("Database conected"))
  .catch((err) => console.error(err.message));
