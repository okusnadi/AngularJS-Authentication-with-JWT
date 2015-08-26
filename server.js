
var express = require('express');
var faker = require('faker');
var cors = require('cors');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

var jwtSecret = 'secret';

var user = {
    username: 'user',
    password: 'password'
}

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(expressJwt({ secret: jwtSecret }).unless({ path: [ '/login' ]}));

app.post('/login', authenticate, function(req, res){
    var token = jwt.sign({
        username: user.username
    }, jwtSecret);
    res.send({
        token: token,
        user: user
    });
});

app.get('/me', checkAuthenticated, function(req, res){
    res.send(req.user);
});

app.get('/random-user', checkAuthenticated, function(req, res){
    var user = faker.helpers.userCard();
    user.avatar = faker.image.avatar();
    res.json(user);
});

app.listen(3000, function(){
    console.log('App listening on localhost:3000')
});


// Tools Functions

function authenticate(req, res, next){
    var body = req.body;
    if (!body.username || !body.password){
        res.status(400).end('Must provide username or password');
    }
    if (body.username !== user.username || body.password !== user.password){
        res.status(401).end('Username or password incorrect');
    }
    next();
}

function checkAuthenticated(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401).end('Must be authenticated');
    }
}