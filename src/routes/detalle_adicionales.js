const express = require('express');
const router = express.Router();

const DetalleAdicionalesController = require('../controllers/detalle_adicionales');
router.get('/api/listaDetalleAdicionalesxIdAlqu/:id_alqu',DetalleAdicionalesController.ListaDetalleAdicionalesxIdAlqu);
router.post('/api/ActualizarDetallerAdic/:id_detadic',DetalleAdicionalesController.ActualizarDetalleAdicionales);
module.exports = router;