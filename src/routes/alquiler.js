const express = require('express');
const router = express.Router();

const AlquilerController = require('../controllers/alquiler');
const md_auth = require('../middlewares/authenticated');
router.get('/api/lista',AlquilerController.ListaGeneral);
router.post('/api/registrarAlquiler',AlquilerController.RegistrarAlquiler);
module.exports = router;