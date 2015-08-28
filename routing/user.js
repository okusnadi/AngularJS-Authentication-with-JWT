var user = require('../controllers/user');


app.post('/login', verify.authenticate, user.login);

app.get('/me', verify.authenticated, user.me);

app.get('/random-user', verify.authenticated, user.userRandom);
