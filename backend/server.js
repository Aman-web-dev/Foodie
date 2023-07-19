const express = require('express');
const app = express();
const mongoose = require('mongoose');
const conncetor = require('./db');
const config = require('./config')






const PORT = config.APP_PORT;

app.use(express.json());
const cors = require("cors");
app.use(cors())

const userRouter = require('./UserRouter/Routes')
// const PostRoute = require('./UserRouter/Post')

app.use(userRouter);




app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Running on port ${PORT}`);
});



