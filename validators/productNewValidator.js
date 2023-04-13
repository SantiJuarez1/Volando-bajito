const { body } = require('express-validator');

const productNewValidator = [
    body('title').notEmpty().withMessage('Este campo es obligatorio!').isString().withMessage('Este campo es obligatorio!'),
    body('description').notEmpty().withMessage('Este campo es obligatorio!').isString().withMessage('Este campo es obligatorio!'),
    body('price').notEmpty().withMessage('Este campo es obligatorio!').isNumeric().withMessage('Este campo es obligatorio!'),
    body('item_1').notEmpty().withMessage('Este campo es obligatorio!').isString().withMessage('Este campo es obligatorio!'),
    body('item_2').notEmpty().withMessage('Este campo es obligatorio!').isString().withMessage('Este campo es obligatorio!'),
    body('item_3').notEmpty().withMessage('Este campo es obligatorio!').isString().withMessage('Este campo es obligatorio!'),
    body('item_4').notEmpty().withMessage('Este campo es obligatorio!').isString().withMessage('Este campo es obligatorio!'),
    body('item_5').notEmpty().withMessage('Este campo es obligatorio!').isString().withMessage('Este campo es obligatorio!'),

];

module.exports = productNewValidator;