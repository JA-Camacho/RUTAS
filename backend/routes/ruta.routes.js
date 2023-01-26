const express = require('express');

const router = express.Router();
const rutas = require('../controllers/ruta.controllers');
router.get('/', rutas.getRutas);
router.post('/', rutas.createRutas);
router.get('/:id', rutas.getRuta);
router.put('/:id', rutas.editRuta);
router.delete('/:id', rutas.deleteRuta);

module.exports = router;