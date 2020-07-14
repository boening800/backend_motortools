const express = require('express');
const router = express.Router();

const FacturaController = require('../controllers/factura');
const md_auth = require('../middlewares/authenticated');
router.post('/api/RegistrarFactura',FacturaController.RegistrarFactura);

module.exports = router;