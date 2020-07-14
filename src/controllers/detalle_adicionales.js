const mysqlConnection = require('../database');

function ListaDetalleAdicionalesxIdAlqu(req,res){
    const {id_alqu} = req.params;
    mysqlConnection.query(
        "SELECT * FROM tb_detalle_adicionales WHERE id_alqu=?",[id_alqu],(err,rows,filds)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        }
    )
}

function ActualizarDetalleAdicionales(req,res){
    
    const {cod_adicional} = req.body;
    const {id_detadic} = req.params;
    mysqlConnection.query(
        "UPDATE tb_detalle_adicionales SET cod_adicional=? WHERE id_detadic=?",
        [cod_adicional,id_detadic],(err,rows,filds)=>{
            if(!err){
                return res.json({
                    estado:'1',
                    mensaje:'Actualizado correctamente'
                });
            }else{
                console.log(err);
                return res.json({
                    mensaje:'Error al actualizar'
                });                        
            }
        });
}

module.exports={
    ListaDetalleAdicionalesxIdAlqu,
    ActualizarDetalleAdicionales
}