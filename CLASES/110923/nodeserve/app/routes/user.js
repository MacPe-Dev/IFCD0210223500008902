const express = require('express')

const UserController = require('../controllers/user')

const router = express.Router()


router.get('/home', UserController.home);
router.post('/test', UserController.test);
router.post('/save-user', UserController.saveUser);
router.get('/user/:id?', UserController.getUser);
router.get('/users', UserController.getUsers);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);


module.exports = router