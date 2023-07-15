const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');


const URI = config.MONGODB_URI;

const connector = async () => {
  try {
    await mongoose.connect(URI, { useNewUrlParser: true });

    const db = mongoose.connection;
    const collection = db.collection('foodItems');
    const fetchedData = await collection.find().toArray();

    console.log(fetchedData);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connector();



