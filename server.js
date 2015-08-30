// general requires
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
crypto = require('crypto');
Promise = require('bluebird');
mongoose = Promise.promisifyAll(require('mongoose'));
expressJwt = require('express-jwt');
jwt = require('jsonwebtoken');
faker = require('faker');

// lib requires
verify = require('./utility/verify');
crypt = require('./utility/crypt');

// create the app
app = express();

// init mongoose
mongoose.connect('mongodb://localhost:27017/webApp');

// parse json data coming from client (used on login)
app.use(bodyParser.json());

// setup cors
app.use(cors());

// setup jwt
jwtSecret = 'AzErTy';
app.use(expressJwt({ secret: jwtSecret }).unless({path: ['/login']}));

// import models
models = require('./models');

// import routing
require('./routing/global');
require('./routing/user');

// run app
app.listen(3000, function() {
    console.log('server listening on :3000');
});