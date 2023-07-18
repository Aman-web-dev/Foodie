const express = require("express");
const app = express();
app.use(express.json());
const User= require('../userModels/User')
const {body,validationResult} =require('express-validator')
const router = express.Router();


router.get('/',(req,res)=>{


  res.send("hello Home page ")
})


router.post('/create' ,[
  body('name','Small Name').isLength({min:4}),
body('email','enter a valid email').isEmail(),
body('password','Small Password').isLength({min:5})
]
,

async(req,res)=>{ 

const errors=validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});

  }

  try{
    const newUser=User.create({
      name:req.body.name,
      location:req.body.location,
      email:req.body.email,
      password:req.body.password
    })
     return res.status(201).json(newUser)
  }catch(error){
  console.log(error).json(error)
  }

})

module.exports=router;