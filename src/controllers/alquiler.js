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
    var hora_actual = new Date();
    // var ticket=Math.random();
    var ticket=Math.floor(Math.random()*(2222-(9999+1))+(9999));
    mysqlConnection.query('SELECT MAX(id_alqu) AS id_alqu FROM tb_alquiler',(err,rows,fields)=>{
        if(!err){
            const id_max = rows[0]['id_alqu'] + 1;
            const {id_vehi,id_cli,id_tipopago,fec_ini_alqu,fec_fin_alqu,desc_alqu,tipo_alqu,estado_alqu,pago_alqu,id_conduc} = req.body;
            mysqlConnection.query(
                "INSERT INTO tb_alquiler(id_alqu,id_vehi,id_cli,id_tipopago,fec_ini_alqu,fec_fin_alqu,desc_alqu,ticket_alquiler,tipo_alqu,estado_alqu,pago_alqu,fec_registr_reserva,id_conduc) VALUES "+
                "("+id_max+",?,?,?,?,?,?,?,?,?,'?',?,?)",
                [id_vehi,id_cli,id_tipopago,
                    fec_ini_alqu,fec_fin_alqu,desc_alqu,ticket,tipo_alqu,
                    estado_alqu,pago_alqu,hora_actual,id_conduc],(err,rows,filds)=>{
                    if(!err){
                        // res.json(rows.insertId);
                        console.log('alquiler',rows.insertId);
                        mysqlConnection.query('SELECT * FROM tb_alquiler WHERE id_alqu='+rows.insertId,(err,rows,fields)=>{
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
function BuscarAlquilerxIdCli(req,res){
    
    const {id_cli} = req.params;
    mysqlConnection.query(
        "SELECT * FROM tb_alquiler WHERE id_cli=? ORDER by id_alqu DESC LIMIT 1",[id_cli],(err,rows,filds)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        }
    )
}
function BuscarAlquilerxticket(req,res){
    
    const {ticket_alquiler} = req.params;
    mysqlConnection.query(
        "SELECT * FROM tb_alquiler WHERE ticket_alquiler=?",[ticket_alquiler],(err,rows,filds)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        }
    )
}
//actualizar para alquilado
function ActualizarEstadAlqu(req,res){
    var hora_actual2 = new Date();

    const {estado_alqu} = req.body;
    const {id_alqu} = req.params;
    mysqlConnection.query(
        "UPDATE tb_alquiler SET estado_alqu=?,fec_registr_alquiler=? WHERE id_alqu=?",
        [estado_alqu,hora_actual2,id_alqu],(err,rows,filds)=>{
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
    ListaGeneral,
    RegistrarAlquiler,
    BuscarAlquilerxIdCli,
    ActualizarEstadAlqu,
    BuscarAlquilerxticket
}
