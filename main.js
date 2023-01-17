const express = require('express');

const mainController = require('../controllers/mainController');

const route = express.Router();

route.get('/',mainController.index);
route.get('/carrito',mainController.carrito);
route.get('/login', mainController.login)
route.get('/register', mainController.register)

module.exports = route;