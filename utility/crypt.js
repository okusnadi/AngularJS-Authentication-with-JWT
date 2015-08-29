

// Nodejs encryption with CTR

var algorithm = 'aes-256-ctr';
var password = 'Ld9!dçJd';


exports.encrypt = function(text){
    var cipher = crypto.createCipher(algorithm,password);
    var crypted = cipher.update(text,'utf8','hex');
    crypted += cipher.final('hex');
    return crypted;
};

exports.decrypt = function(text){
    var decipher = crypto.createDecipher(algorithm,password);
    var dec = decipher.update(text,'hex','utf8');
    dec += decipher.final('utf8');
    return dec;
};