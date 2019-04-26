'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();
mongoose.connect(`mongodb://localhost/bdsalvus`);


mongoose.connection.open("open", function(){
  console.log("rolou");

})
// const mensagem = require('./models/mensagem');


// const indexRoute = require('./routes/index-route');

// const productRoute = require('./routes/mensagem-route');



// app.use('/products', productRoute);


// module.exports = app;