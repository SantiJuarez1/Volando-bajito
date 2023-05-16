const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const mainController = require('../controllers/mainController');

const contactoValidator = require('../validators/contactoValidator');

router.get('/hotel', mainController.hoteles);
router.get('/activity', mainController.paquetes);
router.get('/contact', contactoValidator, mainController.contacto);
router.post('/contact', mainController.contactoRespuesta);
router.get('/carrito', mainController.carrito);

module.exports = router;