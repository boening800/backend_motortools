const mysqlConnection = require('../database');

function ListaGeneral(req,res){
    mysqlConnection.query(
        "SELECT v.marca_vehi,tp.nombre_tipopago,c.nom_cli,c.apepat_cli,a.pago_alqu,"+
        "a.fec_ini_alqu,a.fec_fin_alqu "+
        "FROM tb_alquiler a "+
        "INNER JOIN tb_vehiculo v ON a.id_vehi=v.id_vehi "+
        "INNER JOIN tb_tipo_pago tp ON a.id_tipopago = tp.id_tipopago "+
        "INNER JOIN tb_cliente c ON a.id_cli=c.id_cli ",(err,rows,filds)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        }
    )
}

function RegistrarAlquiler(req,res){
    mysqlConnection.query('SELECT MAX(id_alqu) AS id_alqu FROM tb_alquiler',(err,rows,fields)=>{
        if(!err){
            const id_max = rows[0]['id_alqu'] + 1;
            const {id_vehi,id_cli,id_tipopago,fec_ini_alqu,fec_fin_alqu,desc_alqu,tipo_alqu,estado_alqu,pago_alqu} = req.body;
            mysqlConnection.query(
                "INSERT INTO tb_alquiler(id_alqu,id_vehi,id_cli,id_tipopago,fec_ini_alqu,fec_fin_alqu,desc_alqu,tipo_alqu,estado_alqu,pago_alqu) VALUES "+
                "("+id_max+",?,?,?,?,?,?,?,?,'?')",
                [id_vehi,id_cli,id_tipopago,
                    fec_ini_alqu,fec_fin_alqu,desc_alqu,tipo_alqu,
                    estado_alqu,pago_alqu],(err,rows,filds)=>{
                    if(!err){
                        res.json(rows.insertId);
                        console.log(rows.insertId);
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
    ListaGeneral,
    RegistrarAlquiler
}
