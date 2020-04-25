const express = require('express');
const config = require('./configs/config');
const jwt = require('jsonwebtoken');
const app = express();


//Configuraciones

app.set('port', process.env.PORT || 3000);
app.set('llave', config.llave);
//Middlewares

app.use(express.json(),express.urlencoded({extended:true}));

//Routes

app.use(require('./routes/empleados'));
app.use(require('./routes/cliente'));


//Iniciar Servidor
app.listen(app.get('port'),()=>{
    console.log('Server en puerto ', app.get('port'));
});