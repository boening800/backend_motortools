var jwt = require('jsonwebtoken');

var secret = 'clave_secreta_curso_desarrollar_red_social_angular';

exports.createToken = function(user){
    var payload = {
        nom_usu: user.nom_usu,
        nom_emp: user.nom_emp,
        apepat_emp: user.apepat_emp,
        apemat_emp: user.apemat_emp,
        dni_emp: user.dni_emp,
        id_rol: user.id_rol,
        nom_rol: user.nom_rol,
        expiresIn: 1440
    };

    return jwt.sign(payload, secret);
};