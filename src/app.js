const express = require("express");
const morgan = require("morgan");

const app = express();

const cors = require('cors');


app.use(cors({origin: 'http://localhost:3000'}));
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETED');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.set('port', 4000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/songs", require('./routes/web.routes'))

module.exports = app;