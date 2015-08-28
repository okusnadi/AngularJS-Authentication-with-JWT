


exports.authenticate = function (req, res, next) {
    var body = req.body;
    if (!body.password || !body.username) {
        return res.status(400).send('Must provide password and username');
    }
    if (body.username !== user.username || body.password !== user.password) {
        return res.status(401).send('Username or password incorrect');
    }
    req.user = user;
    next();
};


exports.authenticated = function (req, res, next) {
    if (req.user) {
        next();
    }
    res.status(401).send('Must be authenticated...');

};