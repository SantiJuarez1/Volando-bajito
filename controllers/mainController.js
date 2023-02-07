const { validationResult } = require('express-validator');
const path = require('path');

const controller = {
    index: (req,res) => {
      res.render('index');
    },
    carrito: (req,res) => {
      res.render('carrito');
      },
      register: (req,res) => {
        res.render('register', { session: req.session});

      },
      store: (req,res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
          return res.render('register', { session: req.session, errors:errors.mapped() })
        }
        const {fullname, username, email, birthday, password, confirmPassword} = req.body
        req.session.fullname = fullname
        req.session.username = username
        req.session.email = email
        req.session.birthday = birthday
        req.session.password = password
        req.session.confirmPassword = confirmPassword
        res.render('register', { session: req.session })
      },
      login: (req,res) => {
        res.render('login');
      },


};

module.exports = controller;