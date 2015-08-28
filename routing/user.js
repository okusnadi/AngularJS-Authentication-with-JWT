var user = require('../controllers/user');


app.post('/login', verify.authenticate, user.login);

app.get('/me', verify.checkAuthenticated, user.me);

app.get('/random-user', verify.checkAuthenticated, user.userRandom);
