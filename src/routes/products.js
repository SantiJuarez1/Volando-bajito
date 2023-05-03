//modulos externos
const express = require('express');
const { body } = require('express-validator');
//modulos internos
const productsController = require('../controllers/productsController');
/* const productNewValidator = require('../validators/productNewValidator');  */

const router = express.Router();

//RUTAS
router.get('/', productsController.list);
/* router.get('/detail/:id', productsController.detail);
router.get('/add', productsController.add);
router.post('/', productNewValidator, productsController.create);
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productNewValidator, productsController.update);
router.delete('/delete/:id', productsController.delete); */

module.exports = router;