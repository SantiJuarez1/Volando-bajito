const { body } = require('express-validator');

const contactoValidator = [
    body('name').notEmpty().withMessage('Este campo es obligatorio').matches(/^[a-zA-Z\s]+$/).withMessage('No puede incluir simbolos').not().isNumeric().withMessage('No puede incluir numeros'),
    body('email').isEmail().withMessage('Ingrese una casilla de E-mail valida').notEmpty().withMessage('Este campo es obligatorio'),
    body('asunto').notEmpty().withMessage('Este campo es obligatorio'),
    body('telefono').isNumeric().withMessage('Este campo es obligatorio')
];

module.exports = contactoValidator;