var jwt_cli = require('jsonwebtoken');

var secret = 'clave_secreta_curso_desarrollar_red_social_angular';

exports.createToken = function(user){
    console.log(user);
    var payload = {
        nom_cli: user.nom_cli,
        apepat_cli: user.apepat_cli,
        apemat_cli: user.apemat_cli,
        dni_cli: user.dni_cli,
        expiresIn: 1440
    };

    return jwt_cli.sign(payload, secret);
};