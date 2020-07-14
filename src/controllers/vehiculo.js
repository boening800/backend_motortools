const mysqlConnection = require('../database');
function ListarVehiLibres(req,res){
    mysqlConnection.query(
        "SELECT * FROM tb_vehiculo ",(err,rows,filds)=>{
        if(!err){
            return res.json(rows);
        }else{
            console.log(err);
            res.json(err);
        }
    })
}

function BuscarVehiculoxId(req,res){
    const {id_vehi}=req.params;
    mysqlConnection.query(
        "SELECT * FROM tb_vehiculo WHERE id_vehi=?",[id_vehi],(err,rows,filds)=>{
        if(!err){
            return res.json(rows);
        }else{
            console.log(err);
            res.json(err);
        }
    })
}

module.exports={
    ListarVehiLibres,
    BuscarVehiculoxId
}