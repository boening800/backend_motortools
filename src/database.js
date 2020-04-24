const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Motortools$01',
    database:'bd_motortools'
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
    console.log('La base de datos se conectó');
    }
});

module.exports = mysqlConnection;