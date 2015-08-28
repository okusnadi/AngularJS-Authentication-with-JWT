


exports.authenticate = function (req, res, next) {
    var body = req.body;
    if (!body.password || !body.username) {
        return res.status(400).end('Must provide password and username');
    }
    if (body.username !== user.username || body.password !== user.password) {
        return res.status(401).end('Username or password incorrect');
    }
    req.user = user;
    next();
}


exports.checkAuthenticated = function (req, res, next) {
    if (req.user) {
        next();
    }
    res.status(401).end('Must be authenticated');

}