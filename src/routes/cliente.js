const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/cliente');
const md_auth = require('../middlewares/authenticated');

router.post('/api/login_cliente',ClienteController.LoginCliente);
router.post('/api/cliente',ClienteController.CrearCliente);
router.get('/api/validarclientexdni/:dni_cli',ClienteController.ValidarClientexDNI);
router.get('/api/listarClientes',ClienteController.ListarClientes);
router.post('/api/actualizarCliente/:id_cli',ClienteController.ActualizarCliente);

module.exports = router;