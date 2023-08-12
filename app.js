// importing required packages
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/mongoose');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000
connectDB()

// initializing express
const app = express();

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/products'));

// starting the server
app.listen(PORT, () =>{
    console.log(`API live on  at port :${PORT}`)
 })