const express = require('express');
const router = express.Router();

const AdicionalesController = require('../controllers/adicionales');
const md_auth = require('../middlewares/authenticated');
router.get('/api/listaadicionales',AdicionalesController.ListaAdicionales);
router.post('/api/creardetalleadicionales',AdicionalesController.CrearDetalleAdicional);

module.exports = router;