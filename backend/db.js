const express = require('express');
const app = express();
const mongoose = require('mongoose')
const config = require('./config');



//we imported uri and port from the config file so that we dont share our important info to public while uyploaduing these files on github
PORT = config.APP_PORT;
URI = config.MONGODB_URI;


const connector = async()=>{

mongoose.connect(URI,{useNewUrlParser:true})
.then((response)=>{
  
console.log('mongo is connected')

app.listen(PORT || 8000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Running on port ${PORT}`); 
});

const fetched_data =  mongoose.connection.db.collection('foodItems');



fetched_data.find({}).toArray((err,data)=>{

  if(err){
    console.log("___",err)

  }

  if(!err){
    console.log(data);
  }
})




})
.catch((error)=>{console.log(error)})
}






module.exports = connector;