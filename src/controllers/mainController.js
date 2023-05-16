const { validationResult } = require('express-validator');
const db = require('../database/models');

const controller = {
    hoteles: async (req, res) => {
        try {
            const hoteles = await db.Product.findAll({include: ['images', 'category'], where: {product_categories_id : 2}});
            res.render('hoteles',  { hoteles }); 
        } catch (error) {
            res.send({ error });
        } 
    },

    paquetes: async (req, res) => {
        try {
            const activity = await db.Product.findAll({include: ['images', 'category'], where: {product_categories_id : 3}});
            res.render('paquetes',  { activity }); 
        } catch (error) {
            res.send({ error });
        } 
    },
    contacto: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('contact', { errors: errors.mapped() });
        };

        res.render('contact');
    },
    contactoRespuesta: (req, res) => {
        res.render('contacto');
    },
    carrito: (req, res) => {
        res.render('carrito');
    }
};



module.exports = controller;