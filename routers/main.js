const express = require('express');
const mainController = require('../controllers/mainController');
const route = express.Router();
const registerValidator = require ('../validators/registerValidator')

route.get('/',mainController.index);
route.get ("/data/users", )
route.get('/carrito', mainController.carrito);
route.get('/login', mainController.login);
route.get('/register', mainController.register);
route.post('/register', registerValidator, mainController.store);

module.exports = route;