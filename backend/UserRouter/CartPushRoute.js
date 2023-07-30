const express= require('express');
const app= express();
const mongoose=require('mongoose');
const router = express.Router();
const Cart=require('../userModels/Cart');
app.use(express.json());




router.post('/cart',async(req,res)=>{

    try {
        const newCart = Cart.create({

          userid:req.id,
          cart:req.cart

        })
        console.log(newCart);
        return res.status(201).json(newCart)
      } catch (error) {
        res.send(error)
        console.log(error);
        console.log(error).json(error)
      }
})


module.exports=router;