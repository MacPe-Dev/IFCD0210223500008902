const express = require('express')

const UserController = require('../controllers/curso')

const router = express.Router()


router.get('/home', UserController.home);
router.post('/test', UserController.test);
router.post('/save-curso', UserController.saveCurso);
router.get('/curso/:id?', UserController.getCurso);
router.get('/cursos', UserController.getCurso);
router.put('/curso/:id', UserController.updateCurso);
router.delete('/curso/:id', UserController.deleteCurso);


module.exports = router