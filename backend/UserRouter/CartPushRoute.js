const express= require('express');
const app= express();
const mongoose=require('mongoose');
const router = expressRouter();
const Cart=require('../userModels/Cart');




router.post('/cart',async(req,res)=>{

    try {
        const newCart = Cart.create({

          id: req.body.id,
          location: req.body.location,
          email: req.body.email,
          password: secPass
        })
        console.log(newUser);
        return res.status(201).json(newUser)
      } catch (error) {
        res.send(error)
        console.log(error);
        console.log(error).json(error)
      }
})