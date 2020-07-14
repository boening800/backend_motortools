const mysqlConnection = require('../database');

function RegistrarConductorCliente(req,res) {
    mysqlConnection.query('SELECT MAX(id_conduc) AS id_conduc FROM tb_conductor',(err,rows,fields)=>{
        if(!err){
            const id_max = rows[0]['id_conduc'] + 1;
            const {
                nombre_conduc,apellidos_conduc,licencia_conduc,fec_vencimiento_lic,estado_conduc
            }=req.body;
            mysqlConnection.query(
                "INSERT INTO tb_conductor(id_conduc,nombre_conduc,apellidos_conduc,licencia_conduc,fec_vencimiento_lic,estado_conduc) "+
                "VALUES ("+id_max+",?,?,?,?,?)",
                [nombre_conduc,apellidos_conduc,licencia_conduc,
                    fec_vencimiento_lic,estado_conduc],(err,rows,filds)=>{
                    if(!err){
                        console.log('conductor',rows.insertId);
                        mysqlConnection.query('SELECT * FROM tb_conductor WHERE id_conduc='+rows.insertId,(err,rows,fields)=>{
                            if(!err){
                                res.json(rows);
                                console.log(rows);
                            }else{
                                res.json(err);
                            }
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

function BuscarConductorxId(req,res){
    const {id_conduc}=req.params;
    mysqlConnection.query('SELECT * FROM tb_conductor WHERE id_conduc=?',[id_conduc],(err,rows)=>{
        if(!err){
            return res.json(rows);
        }else{
            console.log(err);
            return res.json(err);
        }
    });
}
module.exports={
    RegistrarConductorCliente,
    BuscarConductorxId
}