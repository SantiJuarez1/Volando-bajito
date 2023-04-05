const express = require('express');
const router = express.Router();
//Requiero multer para la carga de las cards
const { body } = require('express-validator');

const productsController = require('../controllers/productsController');
const productNewValidator = require('../validators/productNewValidator');

router.get('/', productsController.list);
router.get('/detail/:id', productsController.detail);
router.get('/add', productsController.add);
router.post('/', productNewValidator, productsController.create);
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productNewValidator, productsController.update);
router.delete('/delete/:id', productsController.delete);

module.exports = router;