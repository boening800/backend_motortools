const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.post('/api/login',(req,res)=>{
    mysqlConnection.query('SELECT * FROM tb_empleado',(err,rows,filds)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});