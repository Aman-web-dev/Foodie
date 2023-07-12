const express = require("express");
const app = express();
app.use(express.json());
const User= require('../userModels/Model')

const router = express.Router();




  //api to get or read data from database.
  router.get('/',async(req,res)=>{
   
    try{
  
        const showAll= await User.find();
        console.log(showAll) 
       return res.status(201).json(showAll)
        
    }catch (error){
    console.log(error)
  return res.send(500).json({error:error.message})
  }
  
  res.send('api is running on port')
  })
  

module.exports=router;