const fs = require('fs');
const path = require('path'); 

const destinoFile = fs.readFileSync(path.join(__dirname, '../models/destino.json'), 'utf-8');
const listDestinos = JSON.parse(destinoFile);

const paquetesFile = fs.readFileSync(path.join(__dirname, '../models/paquetes.json'), 'utf-8');
const listPaquetes = JSON.parse(paquetesFile);

const hotelesFile = fs.readFileSync(path.join(__dirname, '../models/hoteles.json'), 'utf-8');
const listHoteles = JSON.parse(hotelesFile);

const controller = {
    index: (req, res) => {
       res.render('index', { listDestinos : listDestinos });
    },
    carrito: (req, res) => {
        res.render('carrito');
    }, 
    register: (req, res) => {
        res.render('register');
    },
    login: (req, res) => {
        res.render('login');
    },
    paquetes: (req, res) => {
        res.render('paquetes', { listPaquetes : listPaquetes });
    },
    vuelos: (req, res) => {
        res.render('vuelos', { listDestinos : listDestinos });
    },
    hoteles: (req, res) => {
        res.render('hoteles', { listHoteles : listHoteles });
    }
};

module.exports = controller;