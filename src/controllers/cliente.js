const mysqlConnection = require('../database');
var jwt= require('../services/jwt');

function LoginCliente(req,res){
    const {usuario_cli,clave_cli} = req.body;
    mysqlConnection.query('SELECT * FROM tb_cliente WHERE usuario_cli=? AND clave_cli=?',
        [usuario_cli,clave_cli],(err,rows,filds)=>{
        if(!err){
            if(rows.length == 1){
                return res.status(200).send({
                    token:jwt.createToken(rows[0])
                });
                // res.json({
                //     estado:'1',
                //     mensaje:'logueado correctamente',
                //     token: token
                // });
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

function CrearCliente(req,res){
    mysqlConnection.query('SELECT MAX(id_cli) AS id_cli FROM tb_cliente',(err,rows,fields)=>{
        if(!err){
            const id_max = rows[0]['id_cli'] + 1;
            const {
                nom_cli,apepat_cli,apemat_cli,dni_cli,
                correo_cli,fec_nacimiento_cli,licencia_cli,
                usuario_cli,clave_cli
            }=req.body;
            mysqlConnection.query(
                "INSERT INTO tb_cliente (id_cli,nom_cli,apepat_cli,apemat_cli,dni_cli,"+
                    "correo_cli,fec_nacimiento_cli,licencia_cli,"+
                    "usuario_cli,clave_cli,estado_cli)"+
                "VALUES ("+id_max+",?,?,?,?,?,?,?,?,?,1)",
                [nom_cli,apepat_cli,apemat_cli,
                    dni_cli,correo_cli,fec_nacimiento_cli,
                    licencia_cli,usuario_cli,clave_cli],(err,rows,filds)=>{
                    if(!err){
                        return res.json({
                            estado:'1',
                            mensaje:'Creado correctamente'
                        });
                    }else{
                        console.log(err);
                        return res.json({
                            mensaje:'Error al crear'
                        });                        
                    }
                });
        }else{
            console.log(err);
            return res.json(err);
        }
    });
}

function ValidarClientexDNI(req,res){
    const {dni_cli} = req.params;
    mysqlConnection.query('SELECT * FROM tb_cliente WHERE dni_cli=?',[dni_cli],(err,rows)=>{
        if(!err){
            console.log(rows[0])
            if(rows.length == 1){
                return res.json({
                    estado:'1',
                    mensaje:'Cliente existe',
                    data:rows[0]
                });
            }else{
                return res.json({
                    estado:'2',
                    mensaje:'Cliente no existe' 
                });
            }
        }else{
            console.log(err);
            return res.json(err);
        }
    });
}


function ListarClientes(req,res){
    mysqlConnection.query('SELECT * FROM tb_cliente',(err,rows)=>{
        if(!err){
            return res.json(rows);
        }else{
            console.log(err);
            return res.json(err);
        }
    });
}


module.exports={
    CrearCliente,
    LoginCliente,
    ValidarClientexDNI,
    ListarClientes
}