const express = require('express');
const app = express();
const mongoose =require('mongoose');
const conncetor = require('./db');

// const mongodb =require("../backend/db")


conncetor();