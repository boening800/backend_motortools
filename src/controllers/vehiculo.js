const mysqlConnection = require('../database');
function ListarVehiLibres(req,res){
    const {fec_ini_alqu,fec_fin_alqu} = req.body;
    mysqlConnection.query(
        "SELECT DISTINCT v.id_vehi, v.marca_vehi, v.modelo_vehi, v.placa_vehi, v.precio_vehi FROM tb_alquiler a "+
        "INNER JOIN tb_vehiculo v ON a.id_vehi=v.id_vehi "+
        "WHERE (a.fec_ini_alqu NOT BETWEEN '"+fec_ini_alqu+"' AND a.fec_fin_alqu) AND (a.fec_fin_alqu NOT BETWEEN '"+fec_ini_alqu+"' AND '"+fec_fin_alqu+"')",
        [fec_ini_alqu,fec_fin_alqu],(err,rows,filds)=>{
        if(!err){
            console.log(rows);
            if(rows.length >= 1){
                return res.json(rows);
            }         
        }else{
            console.log(err);
            res.json(err);
        }
    })
}
module.exports={
    ListarVehiLibres
}