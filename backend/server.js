const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const ensureLoggedIn = require("./config/ensureLoggedIn");

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

app.use("/api/users", require("./routes/users"));
app.use('/api/shops', require('./routes/shops'));


//==== listen on port ====
app.listen(port,()=>{
    console.log('listening on port', port);
});
