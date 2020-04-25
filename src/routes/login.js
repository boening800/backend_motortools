const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.post('/api/login',(req,res)=>{
    const {usuario_cli} = req.body;
    mysqlConnection.query('SELECT * FROM tb_empleado WHERE usuario_cli=?',[usuario_cli],(err,rows,filds)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});
module.exports = router;