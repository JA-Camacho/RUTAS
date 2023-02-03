const express = require('express');

const router = express.Router();
const estudiantes = require('../controllers/estudiante.controllers');
router.get('/', estudiantes.getEstudiantes);
router.get('/:id_ruta', estudiantes.getEstudianteR);
router.post('/', estudiantes.createEstudiantes);
router.put('/:id', estudiantes.editEstudiante);
router.delete('/:id', estudiantes.deleteEstudiante);

module.exports = router;