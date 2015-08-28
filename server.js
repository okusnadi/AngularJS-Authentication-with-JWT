// general requires
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
expressJwt = require('express-jwt');
jwt = require('jsonwebtoken');
faker = require('faker');
Promise = require('bluebird');
mongoose = require('mongoose');

// lib requires
verify = require('./utility/verify');

// create the app
app = express();

// parse json data coming from client (used on login)
app.use(bodyParser.json());

// setup cors
app.use(cors());

// setup jwt
jwtSecret = 'AzErTy';
app.use(expressJwt({ secret: jwtSecret }).unless({path: ['/login']}));

// import models
models = require('./models');

// init mongoose
mongoose.connect('mongodb://localhost:27017/webApp');

// import routing
require('./routing/global');
require('./routing/user');

// run app
app.listen(3000, function() {
    console.log('server listening on :3000');
});