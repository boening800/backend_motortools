const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');
//correo , nickname, contraseña
//api para registro cliente
router.post('/api/cliente',(req,res)=>{
    mysqlConnection.query('SELECT MAX(id_cli) AS id_cli FROM tb_cliente',(err,rows,fields)=>{
        if(!err){
            const id_max = rows[0]['id_cli'] + 1;
            const {
                usuario_cli,clave_cli,correo_cli
            }=req.body;
            mysqlConnection.query(
                "INSERT INTO tb_cliente (id_cli,usuario_cli,clave_cli,correo_cli)"+
                "VALUES ("+id_max+",?,?,?)",
                [usuario_cli,clave_cli,correo_cli],(err,rows,filds)=>{
                    if(!err){
                        res.json({
                            estado:'1',
                            mensaje:'Creado correctamente'
                        });
                    }else{
                        console.log(err);
                    }
                });
        }else{
            console.log(err);
        }
    });
});

module.exports = router;