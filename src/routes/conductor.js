const express = require('express');
const router = express.Router();

const ConductorController = require('../controllers/conductor');
const md_auth = require('../middlewares/authenticated');

router.post('/api/registrarConductorCliente',ConductorController.RegistrarConductorCliente);
router.get('/api/BuscarConductorClientexId/:id_conduc',ConductorController.BuscarConductorxId);

module.exports = router;