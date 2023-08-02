const express= require('express');
const app= express();
const mongoose=require('mongoose');
const router = express.Router();
const foodCart=require('../userModels/Cart');
const { findOneAndUpdate } = require('../userModels/Cart');
app.use(express.json());




router.patch('/cart', async(req,res)=>{
    
  const useremail={useremail:req.body.useremail+"cart"}
  console.log("req.body 1",req.body.useremail)
  const {foodid,quantity,price}=req.body;
  console.log("req.body 2",req.body.cart)
  console.log(useremail+"cart")

  try{
 const updateCart = await foodCart.findOneAndUpdate(useremail,{ $push: { cart: req.body.cart } },{new:true})

 if(updateCart==null)
 {console.log("wrong data"); return res.status(500).json({error:"wrong data "});}

 else{
 console.log(updateCart);
 console.log(`${updateCart}successfully Updated`);
 return res.status(201).json(updateCart);
}
  }catch(error){
    console.log(error);
    return  res.status(500).json({error:error.message});

  }
})



module.exports=router;