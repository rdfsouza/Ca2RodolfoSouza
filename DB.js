//this class holds the connection with my database  

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
mongoose.Promise = global.Promise

mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true, useNewUrlParser: true}).then(
 () => {
    console.log("Database connection established!");
 },
 err => {
    console.log("Error connecting Database instance due to: ", err);
 });