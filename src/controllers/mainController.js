const db = require('../database/models');

const controller = {
    hoteles: async (req, res) => {
        try {
            const hoteles = await db.Product.findAll({include: ['images', 'category']/* where: { category: req.body.category} */});
            res.render('hoteles',  { hoteles }); 
        } catch (error) {
            res.send({ error });
        } 
    },

    paquetes: async (req, res) => {
        try {
            const activity = await db.Product.findAll({include: ['images', 'category']/* where: { category: req.body.category} */});
            res.render('paquetes',  { activity }); 
        } catch (error) {
            res.send({ error });
        } 
    },
    contacto: (req, res) => {
        res.render('contact');
    }
};



module.exports = controller;