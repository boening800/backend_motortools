const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');
const ClienteController = require('../controllers/cliente');
const md_auth = require('../middlewares/authenticated');

router.post('/api/login_cliente',ClienteController.LoginCliente);
router.post('/api/cliente',ClienteController.CrearCliente);


module.exports = router;