const express = require("express");
const app = express();
app.use(express.json());
const User = require('../userModels/User')
const { body, validationResult } = require('express-validator')
const router = express.Router();
const bcrypt = require('bcryptjs');
const foodCart = require('../userModels/Cart')




router.post('/create', [
    body('name', 'Small Name').isLength({ min: 4 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', 'Small Password').isLength({ min: 5 })
  ],
  
    async (req, res) => {
  
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({ errors: errors.array() });
  
      }
  
  
      const salt = await bcrypt.genSalt(10);
      let secPass = await bcrypt.hash(req.body.password, salt)
  
      try {
        const newUser = User.create({
          name: req.body.name,
          location: req.body.location,
          email: req.body.email,
          password: secPass
        })
        console.log(newUser);
        console.log("creating new Cart....")
        const newCart = foodCart.create({
         userid: req.body.email,
        useremail:req.body.email,
        cart:{
          foodid:req.body.location,
          quantity:secPass,
          price:req.body.name
        }
        })
        console.log("Cart Created Successfully")
        return res.status(201).json(newUser)
      } catch (error) {
        res.send(error)
        console.log(error);
        console.log(error).json(error)
      }
  
    })  
    

    module.exports=router;