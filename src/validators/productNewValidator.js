const { body } = require('express-validator');

const productNewValidator = [
    body('title').notEmpty().withMessage('Este campo es obligatorio!').isString().withMessage('Este campo es obligatorio!'),
    body('description').notEmpty().withMessage('Este campo es obligatorio!').isString().withMessage('Este campo es obligatorio!'),
    body('price').notEmpty().withMessage('Este campo es obligatorio!').isNumeric().withMessage('Este campo es obligatorio!')
];

module.exports = productNewValidator;