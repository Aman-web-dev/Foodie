const express = require('express');
const app = express();
const conncetor = require('./db');
const config = require('./config')
const PORT = config.APP_PORT;




app.use(express.json());
const cors = require("cors");
app.use(cors())

// const userRouter = require('./UserRouter/Routes')
// // const PostRoute = require('./UserRouter/Post')

// app.use(userRouter);

const LoginRouter = require('./UserRouter/LoginRoute');
app.use('/api',LoginRouter);


const SigninRouter = require('./UserRouter/SigninRoute');
app.use('/api',SigninRouter);


const foodRouter=require('./UserRouter/FoodRoute')
app.use('/api',foodRouter);


const cartRouter=require('./UserRouter/CartPushRoute')
app.use('/api',cartRouter)


app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Running on port ${PORT}`);
});



