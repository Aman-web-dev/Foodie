const express = require('express');
const app = express();
const mongoose = require('mongoose')
const config = require('./config');



//we imported uri and port from the config file so that we dont share our important info to public while uploaduing these files on github
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


})
.catch((error)=>{console.log(error)})
}


module.exports = connector;