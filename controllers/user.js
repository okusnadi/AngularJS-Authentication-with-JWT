

exports.login = function(req, res) {

    var token = jwt.sign({
        username: req.user.username
    }, jwtSecret);

    var user = {};
    //user.username = req.user.username;

    res.json({
        token: token,
        user: user
    });
};

exports.me = function(req, res) {
    res.json(req.user);
};

exports.userRandom = function(req, res) {
    var user = faker.helpers.userCard();
    user.avatar = faker.image.avatar();
    res.json(user);
};