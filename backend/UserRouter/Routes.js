const express = require("express");
const app = express();
app.use(express.json());
const User= require('../userModels/User')

const router = express.Router();


router.get('/',(req,res)=>{


  res.send("hello Home page ")
})

router.get('/c',(req,res)=>{


  res.send("hello c page ")
})

router.get('/about',(req,res)=>{


  res.send("hello about page ")
})

  

router.post('/about',async (req,res)=>{

  const {name,location,email,password}=req.body;
  try{
    const newUser=User.create({
      name:name,
      location:location,
      email:email,
      password:password
    })
     return res.status(201).json(newUser)
  }catch(error){
  console.log(error).json(error)
  }

})

module.exports=router;