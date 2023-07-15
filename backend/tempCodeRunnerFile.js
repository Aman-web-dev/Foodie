const express = require('express');
const app = express();
const mongoose =require('mongoose');
const conncetor = require('./db');


app.use(express.json());
const cors=require("cors");