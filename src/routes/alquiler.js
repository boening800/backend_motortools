const express = require('express');
const router = express.Router();

const AlquilerController = require('../controllers/alquiler');
const md_auth = require('../middlewares/authenticated');
router.get('/api/lista',AlquilerController.ListaGeneral);
router.post('/api/registrarAlquiler',AlquilerController.RegistrarAlquiler);
router.get('/api/buscarAlquiler/:id_cli',AlquilerController.BuscarAlquilerxIdCli);
router.post('/api/ActualizarEstAlquiler/:id_alqu',AlquilerController.ActualizarEstadAlqu);
router.get('/api/BuscarAlquilerxTicke/:ticket_alquiler',AlquilerController.BuscarAlquilerxticket);
module.exports = router;