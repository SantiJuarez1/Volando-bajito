const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');
const checkUserMiddleware = require('../middlewares/checkUserMiddleware');

router.get('/', checkUserMiddleware, adminController.index);


module.exports = router;