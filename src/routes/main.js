const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/hotel', mainController.hoteles);
router.get('/activity', mainController.paquetes);
router.get('/contact', mainController.contacto);

module.exports = router;