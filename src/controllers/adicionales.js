const mysqlConnection = require('../database');

function ListaAdicionales(req,res){
    mysqlConnection.query(
        "SELECT * FROM tb_adicionales",(err,rows,filds)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        }
    )
}

function CrearDetalleAdicional(req,res){
    mysqlConnection.query('SELECT MAX(id_detadic) AS id_detadic FROM tb_detalle_adicionales',(err,rows,fields)=>{
        if(!err){
            const id_max = rows[0]['id_detadic'] + 1;
            const {
                id_adc,id_alqu
            }=req.body;
            mysqlConnection.query(
                "INSERT INTO tb_detalle_adicionales (id_detadic,id_adc,id_alqu)"+
                "VALUES ("+id_max+",?,?)",
                [id_adc,id_alqu],(err,rows,filds)=>{
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

module.exports={
    ListaAdicionales,
    CrearDetalleAdicional
}