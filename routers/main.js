const express = require('express');

const mainController = require('../controllers/mainController');
const registerValidator = require ('../validators/registerValidator');
const router = express.Router();

router.get('/',mainController.index);
router.get('/carrito',mainController.carrito);
router.get('/login', mainController.login);
router.post('/register', registerValidator, mainController.store);
router.get('/paquetes', mainController.paquetes);
router.get('/vuelos', mainController.vuelos);
router.get('/hoteles', mainController.hoteles);

module.exports = router;

