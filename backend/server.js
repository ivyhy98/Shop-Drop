const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

require('./config/database');
require('dotenv').config();

const app = express();

const port = process.env.PORT;

//==== Middleware setup ====
app.use((req, res, next) => {
  next();
});

app.use(express.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use(express.json());

//==== Routes ====
app.get('/api',(req,res)=>{
    res.send('Hello');
})

//==== listen on port ====
app.listen(port,()=>{
    console.log('listening on port', port);
});
