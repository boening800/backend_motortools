var jwt = require('jsonwebtoken');

var secret = 'clave_secreta_curso_desarrollar_red_social_angular';

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        name: user.name,
        surname: user.surname,
        nick: user.nick,
        email: user.email,
        role: user.role,
        image: user.image,
        expiresIn: 1440
    };

    return jwt.sign(payload, secret);
};