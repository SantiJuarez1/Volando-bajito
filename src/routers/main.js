const express = require('express');

const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/',mainController.index);
router.get('/carrito',mainController.carrito);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/paquetes', mainController.paquetes);
router.get('/vuelos', mainController.vuelos);
router.get('/hoteles', mainController.hoteles);
router.get('/perfil', mainController.perfil);

module.exports = router;