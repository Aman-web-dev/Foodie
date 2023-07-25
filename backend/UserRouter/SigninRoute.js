const express = require("express");
const app = express();
app.use(express.json());
const User = require('../userModels/User')
const { body, validationResult } = require('express-validator')
const router = express.Router();
const bcrypt = require('bcryptjs');





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
        return res.status(201).json(newUser)
      } catch (error) {
        res.send(error)
        console.log(error);
        console.log(error).json(error)
      }
  
    })
  

    module.exports=router;