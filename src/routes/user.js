//modulos externos
const express = require('express');
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');
//modulos internos
const userController = require('../controllers/userController');
//configuracion
const router = express.Router(); 
//donde se almacenan los avatars
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = path.join(__dirname, '../public/images/user');
        cb(null, folder);
    },//cambiar nombres
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-user${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

const upload = multer({
    storage
}); 
//VAlIDACIONES PARA DB
const authMiddleware = require('../middlewares/authMiddleware'); //si esta logueado tiene acceso a...
const registerValidator = require('../validators/registerValidator');
const guestMiddleware = require('../middlewares/guestMiddleware')
const mantenimientoMiddleware = require('../middlewares/mantenimientoMiddleware');

//RUTAS PARA DB
router.get('/register', guestMiddleware, userController.register);
router.post('/register', upload.single('avatar'), registerValidator, userController.create); 
router.get('/login', mantenimientoMiddleware, userController.login); 
router.post('/login', guestMiddleware, userController.loginProcess); 
router.get('/', authMiddleware, userController.profile);
router.get('/logout', userController.logout); 

//VAlIDACIONES PARA JSON
/* const registerValidator = require('../validators/registerValidator'); */
/* const loginValidator = require('../validators/loginValidator');
const guest = require('../middlewares/guest');
const auth = require('../middlewares/auth');*/

/* RUTAS PARA JSON
router.get('/register', guest, userController.registro);
router.post('/register', registerValidator, userController.processRegister);
router.get('/login', guest, userController.login);
router.post('/login', loginValidator, userController.processLogin);
router.get('/profile', auth, userController.profile);
router.get('/logout', userController.logout); */

module.exports = router;