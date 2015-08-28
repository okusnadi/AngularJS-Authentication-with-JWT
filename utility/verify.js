


exports.authenticate = function (req, res, next) {

    var body = req.body;

    if (!body.password || !body.username) {
        return res.status(400).send('Must provide password and username');
    } else {
        models.User.findOne({username:body.username}, function (err, obj){
            if (obj){
                if (body.password !== obj.password) {
                    return res.status(401).send('Username or password incorrect');
                }
                req.user = user;
                next();
            } else {
                return res.status(401).send('Username or password incorrect');
            }

        });
    }

};


exports.authenticated = function (req, res, next) {
    if (req.user) {
        next();
    }
    else {
        res.status(401).send('Must be authenticated...');
    }

};