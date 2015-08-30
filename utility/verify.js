


exports.authenticate = function (req, res, next) {

    var body = req.body;
    var options = {username:body.username};
    var checkPassword = function (err, obj){

        passwordEncrypt = crypt.encrypt(body.password);

        if (obj){
            if (passwordEncrypt !== obj.password) {
                return res.status(401).send('Username or password incorrect');
            }
            req.user = obj;
            next();
        } else {
            return res.status(401).send('Username or password incorrect');
        }

    };

    if (!body.password || !body.username) {
        return res.status(400).send('Must provide password and username');
    } else {
        models.User.findOne(options, checkPassword);
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