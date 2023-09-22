// Rutas para mensajes
const express = require('express');
const router = express.Router();
const mensajeController = require('../controllers/mensajeController');

// api/cursos
router.post('/', mensajeController.crearMensaje);
router.get('/', mensajeController.obtenerMensaje);
router.put('/:id', mensajeController.actualizarMensaje);
router.get('/:id', mensajeController.obtenerMensaje);
router.delete('/:id', mensajeController.eliminarMensaje);

module.exports = router;