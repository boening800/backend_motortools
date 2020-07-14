const mysqlConnection = require('../database');
var jwt= require('../services/jwt');

function RegistrarFactura(req,res){
    var ticket=Math.floor(Math.random()*(2222-(9999+1))+(9999));
    mysqlConnection.query('SELECT MAX(id_fact) AS id_fact FROM tb_facturacion',(err,rows,fields)=>{
        if(!err){
            const id_max = rows[0]['id_fact'] + 1;
            const {fec_fact,igv,monto_fact,id_alqu} = req.body;
            mysqlConnection.query(
                "INSERT INTO tb_facturacion(id_fact,fec_fact,igv,monto_fact,id_alqu) VALUES "+
                "("+id_max+",?,?,?,?)",
                [fec_fact,igv,monto_fact,
                    id_alqu],(err,rows,filds)=>{
                    if(!err){
                        mysqlConnection.query('SELECT * FROM tb_facturacion',(err,rows,fields)=>{
                            if(!err){
                                res.json(rows);
                            }else{
                                res.json(err);
                            }
                        });
                    }else{
                        res.json(err);
                    }
                }
            )
        }else{
            res.json(err);
        }
    });
}

module.exports={
    RegistrarFactura
}