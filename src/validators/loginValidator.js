const { body } = require('express-validator');

const loginValidators = [
    body('email').isEmail().withMessage('Ingrese una casilla de E-Mail valida').notEmpty().withMessage('Este campo es obligatorio'),
    body('password').notEmpty().withMessage('Este campo es obligatorio').isLength({ min: 6 }).withMessage('Su contraseña debe tener 6 caracteres como minimo')
];

module.exports = loginValidators;