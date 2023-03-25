/* const { validationResult } = require('express-validator'); */
const path = require('path');
const fs = require('fs');


const destinoFile = fs.readFileSync(path.join(__dirname, '../data/destino.json'), 'utf-8');
const listDestinos = JSON.parse(destinoFile);

const paquetesFile = fs.readFileSync(path.join(__dirname, '../data/paquetes.json'), 'utf-8');
const listPaquetes = JSON.parse(paquetesFile);

const hotelesFile = fs.readFileSync(path.join(__dirname, '../data/hoteles.json'), 'utf-8');
const listHoteles = JSON.parse(hotelesFile);

const perfilFile = fs.readFileSync(path.join(__dirname, '../data/perfil.json'), 'utf-8');
const listperfil = JSON.parse(perfilFile);

const userDataFile = fs.readFileSync(path.join(__dirname, '../data/UserData.json'), 'utf-8');
const listuserData = JSON.parse(userDataFile);


const controller = {
  index: (req, res) => {
    res.render('index', { listDestinos: listDestinos });
  },
  carrito: (req, res) => {
    res.render('carrito');
  },
  register: (req, res) => {
    res.render('register'/* , { session: req.session } */);
  },
  /* store: (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.render('register', { session: req.session, errors: errors.mapped() })
    }
    const { fullname, username, email, birthday, password, confirmPassword } = req.body
    req.session.fullname = fullname
    req.session.username = username
    req.session.email = email
    req.session.birthday = birthday
    req.session.password = password
    req.session.confirmPassword = confirmPassword
    res.render('register', { session: req.session })
  }, */
  login: (req, res) => {
    res.render('login');
  },
  paquetes: (req, res) => {
    res.render('paquetes', { listPaquetes: listPaquetes });
  },
  vuelos: (req, res) => {
    res.render('vuelos', { listDestinos: listDestinos });
  },
  hoteles: (req, res) => {
    res.render('hoteles', { listHoteles: listHoteles });
  },
  perfil: (req, res) => {
    res.render('perfil',{listperfil : listperfil});
  },
  userData: (req, res) => {
    res.render('userData',{listuserData : listuserData});
  }
};





module.exports = controller;