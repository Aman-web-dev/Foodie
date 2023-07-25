const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');

const URI = config.MONGODB_URI;

const connector = async () => {

  try {
  console.log('MongoDB connected successfully');

   await mongoose.connect(URI, { useNewUrlParser: true });

   try{
    
    const fetched= await mongoose.connection.db.collection('foodItems').find({}).toArray()
    // console.log('This is fetched data',fetched)
    global.foodItems=fetched
  
  }catch(error){
     console.log(error)
  }


  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connector();


