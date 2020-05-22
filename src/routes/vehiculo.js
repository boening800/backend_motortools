const express = require('express');
const router = express.Router();

const VehiculoController = require('../controllers/vehiculo');
const md_auth = require('../middlewares/authenticated');
router.post('/api/listarVehiLibres',VehiculoController.ListarVehiLibres);

module.exports = router;