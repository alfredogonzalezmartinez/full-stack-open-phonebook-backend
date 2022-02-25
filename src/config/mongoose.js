require('dotenv').config();

const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => console.info('Database conected'))
  .catch((err) => console.error(err.message));
