const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');


const registerValidator = require('../validators/registerValidator');
const loginValidator = require('../validators/loginValidator');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//formulario de registro
router.get('/register', guestMiddleware, usersController.registro);
//procesar el registro
router.post('/register', registerValidator, usersController.processRegister);
//formulario de login
router.get('/login', guestMiddleware, usersController.login);
//procesar el login
router.post('/login', loginValidator, usersController.processLogin);
//perfil del usuario
router.get('/profile', authMiddleware, usersController.profile);
//logout
router.get('/logout', usersController.logout);

module.exports = router;