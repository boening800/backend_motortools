const express = require('express');
const router = express.Router();

const EmpleadoController = require('../controllers/empleado');
const md_auth = require('../middlewares/authenticated');
router.post('/api/login_empleado',EmpleadoController.LoginEmpleado);
// router.get('/api',(req,res)=>{
//     mysqlConnection.query('SELECT * FROM tb_empleado',(err,rows,filds)=>{
//         if(!err){
//             res.json(rows);
//         }else{
//             console.log(err);
//         }
//     })
// });

// router.get('/api/:id',(req,res)=>{
//     const {id} = req.params;
//     mysqlConnection.query('SELECT * FROM tb_empleado WHERE id_emp = ?',[id],(err,rows,filds)=>{
//         if(!err){
//             res.json(rows[0]);
//         }else{
//             console.log(err);
//         }
//     });
// });

// router.post('/api',(req,res)=>{
//     mysqlConnection.query('SELECT MAX(id_emp) AS id_emp FROM tb_empleado',(err,rows,fields)=>{
//         if(!err){
//             const id_max = rows[0]['id_emp'] + 1;
//             const {nom_emp,apepat_emp,apemat_emp,dni_emp} =req.body;
//             mysqlConnection.query(
//                 "INSERT INTO tb_empleado (id_emp, nom_emp, apepat_emp, apemat_emp, dni_emp)"+
//                 "VALUES ("+id_max+",?,?,?,?)",
//                 [nom_emp,apepat_emp,apemat_emp,dni_emp],(err,rows,filds)=>{
//                     if(!err){
//                         res.json({
//                             estado:'1',
//                             mensaje:'Creado correctamente'
//                         });
//                     }else{
//                         console.log(err);
//                     }
//                 });
//         }else{
//             console.log(err);
//         }
//     });
// });

// router.put('/api/:id',(req,res)=>{
//     const {nom_emp,apepat_emp,apemat_emp,dni_emp} = req.body;
//     const {id}=req.params;
//     mysqlConnection.query(
//         'UPDATE tb_empleado SET nom_emp=?,apepat_emp=?,apemat_emp=?,dni_emp=?'+
//         'WHERE id_emp='+id,
//         [nom_emp,apepat_emp,apemat_emp,dni_emp],(err,rows,filds)=>{
//             if(!err){
//                 res.json({
//                     estado:'1',
//                     mensaje:'Actualizado correctamente'
//                 });
//             }else{
//                 console.log(err);
//             }
//         });
// });
module.exports = router;