const mysqlConnection = require('../database');
var jwt= require('../services/jwt');

function LoginEmpleado(req,res){
    const {nom_usu,pass_usu} = req.body;
    mysqlConnection.query(
        'SELECT u.nom_usu, e.nom_emp, e.apepat_emp, e.apemat_emp, e.dni_emp, r.id_rol, r.nom_rol '+
        'FROM tb_detalle_usuario du '+
        'INNER JOIN tb_usuario u ON du.id_usu=u.id_usu '+
        'INNER JOIN tb_empleado e ON du.id_emp=e.id_emp '+
        'INNER JOIN tb_rol r ON du.id_rol=r.id_rol '+
        'WHERE u.nom_usu=? AND u.pass_usu=?',
        [nom_usu,pass_usu],(err,rows,filds)=>{
        if(!err){
            if(rows.length == 1){
                return res.status(200).send({
                    token:jwt.createToken(rows[0])
                });
            }else{
                res.send(401)
            }          
        }else{
            console.log(err);
            res.json({
                mensaje:'Error al loguear'
            });
        }
    })
}

module.exports={
    LoginEmpleado
}