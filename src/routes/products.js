//modulos externos
const express = require('express');
const path = require('path');
const { body } = require('express-validator');
const multer = require('multer');
//modulos internos
const productsController = require('../controllers/productsController');
const productNewValidator = require('../validators/productNewValidator');

const router = express.Router();

//donde se almacenan las imagenes del producto
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = path.join(__dirname, '../public/images/product');
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

//RUTAS
router.get('/', productsController.index);
router.get('/products/admin', productsController.admin);
router.get('/detail/:id', productsController.detail);
router.get('/create', productsController.add);
router.post('/create', upload.single('image'), productNewValidator, productsController.create);
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productNewValidator, productsController.update);
router.get('/delete/:id', productsController.destroy);

/* router.get('/detail/:id', productsController.detail);
router.get('/add', productsController.add);
router.post('/', productNewValidator, productsController.create);
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productNewValidator, productsController.update);
router.delete('/delete/:id', productsController.delete); */

module.exports = router;