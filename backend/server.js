const express = require('express');
const logger = require('morgan');
const path = require('path')
const cookieParser = require('cookie-parser')
require('./config/database');
require('dotenv').config();

const app = express();

const port = process.env.PORT;

//==== Middleware setup ====
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());

//==== Routes ====
app.get('/api',(req,res)=>{
    res.send('Hello');
})

app.use('/api/shops', require('./routes/shops'));


//==== listen on port ====
app.listen(port,()=>{
    console.log('listening on port', port);
});
