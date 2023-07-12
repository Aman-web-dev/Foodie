const express = require('express');
const app = express();
const mongoose =require('mongoose');
const conncetor = require('./db');

const userRouter =require('./UserRouter/Routes')
conncetor();




app.use(userRouter);
