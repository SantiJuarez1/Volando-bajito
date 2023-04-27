const { body } = require('express-validator');

const registerValidators = [
    body('fullname').notEmpty().withMessage('Este campo es obligatorio').matches(/^[a-zA-Z\s]+$/).withMessage('No puede incluir simbolos').not().isNumeric().withMessage('No puede incluir numeros'),
    body('username').notEmpty().withMessage('Este campo es obligatorio'),
    body('email').isEmail().withMessage('Ingrese una casilla de E-mail valida').notEmpty().withMessage('Este campo es obligatorio'),
    body('password').notEmpty().withMessage('Este campo es obligatorio').isLength({ min: 6 }).withMessage('Su contraseña debe tener 6 caracteres como minimo')
];

module.exports = registerValidators;