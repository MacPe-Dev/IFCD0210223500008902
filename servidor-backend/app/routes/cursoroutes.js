// Rutas para curso
const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

// api/cursos
router.post('/', cursoController.crearCurso);
router.get('/', cursoController.obtenerCursos);
router.put('/:id', cursoController.actualizarCurso);
router.get('/:id', cursoController.obtenerCurso);
router.delete('/:id', cursoController.eliminarCurso);

module.exports = router;