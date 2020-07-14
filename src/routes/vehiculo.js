const express = require('express');
const router = express.Router();

const VehiculoController = require('../controllers/vehiculo');
const md_auth = require('../middlewares/authenticated');
router.get('/api/listarVehiLibres',VehiculoController.ListarVehiLibres);
router.get('/api/BuscarVehiculoxId/:id_vehi',VehiculoController.BuscarVehiculoxId);
module.exports = router;