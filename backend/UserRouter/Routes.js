const express = require("express");
const app = express();
app.use(express.json());
const User = require('../userModels/User')
const { body, validationResult } = require('express-validator')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = 'sangeetakifuddilenihaimujhe'




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

router.post('/login', [

  body('email', 'invalidEmail').isEmail(),
  body('password', 'invalidPassword').isLength({ min: 6 })
]
  , async (req, res) => {


    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });

    }




    const { email } = req.body
    try {
      const userData = await User.findOne({ email })
      if (!userData) {
        return res.status(500).json({ errors: "NOT FOUND (try another Email)" })
      }

      const isMatch = bcrypt.compareSync(req.body.password, userData.password);




      if (!isMatch) {
        return res.status(500).json({ errors: "Wrong Password" })
      }




      const data = {


        user: {
          id: userData.id,
          name: userData.name,
          email: userData.email
        }
      }


      const authToken = jwt.sign(data, secret)



      return res.status(201).json({ success: true, authToken: authToken })

    }



    catch (error) {
      res.send(userData)
      console.log(error)
      return res.status(500).json(error)
    }



  })



router.get('/', async (req, res) => {

  const response = await User.find()

  return res.status(201).json(response)



})

router.get("/api/loaddata", async (req, res) => {


  try {

    const data = await global.foodItems

    console.log(data)
    res.send([data])

  }
  catch (error) {

    console.error(error)
    res.send('server Error')
  }


})




module.exports = router;