const { validationResult } = require('express-validator');
const { ValidationError } = require('sequelize');
const db = require('../database/models');

const controller = {
    list: async (req, res) => {
        try {
            const products = await db.Product.findAll();
            res.render('index', { products });
        } catch (error) {
            res.send({ error });
        }
    },
    admin: (req, res) => {
        res.render('admin');
    }
    /* detail: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id);
            //.findOne({ where: {id: req.paramas.id}})
            res.render('detail', { product });
        } catch (error) {
            res.send({ error });
        }
    },
    add: async (req, res) => {
        res.render('product-create');
    },
    create: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('product-create', { errors: errors.mapped() });
        }
        const newProduct = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            item_1: req.body.item_1,
            item_2: req.body.item_2,
            item_3: req.body.item_3,
            item_4: req.body.item_4,
            item_5: req.body.item_5
        };
        try {
            await db.Product.create(newProduct);
            return res.redirect('/');
        } catch (error) {
            return res.send({error});
        }
    },
    edit: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id);
            res.render('product-edit', { Product: product });
        } catch (error) {
            return res.send({ error });
        }
    },
    update: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('product-edit', { errors: errors.mapped() });
        }
        try {
            const product = {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                item_1: req.body.item_1,
                item_2: req.body.item_2,
                item_3: req.body.item_3,
                item_4: req.body.item_4,
                item_5: req.body.item_5
            };
            await db.Product.update(product, { where: { id: req.params.id } });
            return res.redirect('/');
        } catch (error) {
            return res.send({ error });
        }
    },
    delete: async (req, res) => {
        try {
            await db.Product.findByPk(req.params.id);
            res.redirect('/');
        } catch (error) {
            return res.send(error);
        }
    } */
}




module.exports = controller;