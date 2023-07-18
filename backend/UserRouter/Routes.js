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
      console.log(errors);
    return res.status(400).json({errors:errors.array()});

  }

  try{
    const newUser=User.create({
      name:req.body.name,
      location:req.body.location,
      email:req.body.email,
      password:req.body.password
    })
    console.log(newUser);
     return res.status(201).json(newUser)
  }catch(error){
    res.send(error)
    console.log(error);
  console.log(error).json(error)
  }

})





router.post('/login',[

body('email','invalidEmail').isEmail(),
body('password','invalidPassword').isLength({min:6})
]
,async(req,res)=>{


  const errors=validationResult(req)
  if(!errors.isEmpty()){
      console.log(errors);
    return res.status(400).json({errors:errors.array()});

  }




  const {email}=req.body
try{
  const userData = await User.findOne({email})
  if(!userData) {
    return res.status(500).json({errors:"NOT FOUND (try another Email)"})
  }

  if(req.body.password != userData.password){
    return res.status(500).json({errors:"Wrong Password"})
  }

  return res.status(201).json(userData)

  }

  
  
  catch(error){
    res.send(userData)   
console.log(error)
  return   res.status(500).json(error)
  }



})


module.exports=router;