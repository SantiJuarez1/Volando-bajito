// PARA DB
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const db = require('../database/models');
const session = require('express-session');


const controller = {
    register: (req, res) => {
        res.render('register');
    },

    create: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('register', { errors: errors.mapped() });
        };

        const userInDB = await db.User.findOne({
            include: ['role'],
            where: {
                email: req.body.email
            }
        });
        if(userInDB){
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya esta registrado'
                    }
                },
                oldData: req.body
            });
        }

        try {
            const user = {
                fullname: req.body.fullname,
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.file.filename ? req.file.filename : 'default-profile.webp',
                role: 2
            };
            await db.User.create(user);
            res.redirect('/user/login');

            

        } catch (error) {
            res.send(error);
        }
    },
    login: (req, res) => {
        res.render('login');
    },
    loginProcess: async (req, res) => {
        try {
            const user = await db.User.findOne({
                include: ['role'],
                where: {
                    email: req.body.email
                }
            });
            if (!user) {
                return res.render('login', { errors: [{ msg: "Credenciales invalidas" }] });
            }
            if (!bcrypt.compareSync(req.body.password, user.password)) {
                return res.render('login', { errors: [{ msg: "Credenciales invalidas" }] });
            }

            if(req.body.remember_me) {
                res.cookie('recordame', req.body.email, { maxAge: (1000 * 60) * 2 })
            }
            //variable de session
            req.session.user = {
                id: user.id,
                email: user.email,
                role: user.role.name,
                fullname: user.fullname,
                avatar: user.avatar,
                role: user.role
            };

            res.redirect('/user'); //re dirije a perfil
        } catch (error) {
            res.send(error);
        }
    },
    profile: (req, res) => {
        return res.render('profile', { user: req.session.user });
    },
    logout: (req, res) => {
        res.clearCookie('userEmail'); //destruir cookie
        req.session.destroy();
        return res.redirect('/')
    }
};

module.exports = controller;

/* PARA JSON
 //importar path
const path = require('path');
//importar fs
const fs = require('fs');
const bcryptjs = require('bcryptjs');
//importar
const { validationResult } = require('express-validator');
const User = require('../models/User');

const controller = {
    registro: (req, res) => {
        res.render('register');
    },
    processRegister: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('register', { session: req.session, errors: errors.mapped() });
        };
        const { fullname, username, email, birthday, password, confirmPassword } = req.body;
        req.session.fullname = fullname;
        req.session.username = username;
        req.session.email = email;
        req.session.birthday = birthday;
        req.session.password = password;
        req.session.confirmPassword = confirmPassword;
        //buscar usuario x email
        const userInDB = User.findByField('email', req.body.email);
        if(userInDB) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya esta registrado'
                    }
                }
            });
        };
        //bcryptjs
        const userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10)
        };

        const userCreated = User.create(userToCreate);

        res.redirect('/user/login');
    },
    login: (req, res) => {
        res.render('login', { session: req.session });
    },
    processLogin: (req, res) => {
        //encontrar usuario x mail
        const userToLogin = User.findByField('email', req.body.email);

        if(userToLogin) {
            const isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isOkThePassword) {
                //session para guardar usuario en session
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.remember_me) { //setear una cookie
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60 ) * 2 });
                }

                return res.redirect('/user/profile');
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            });
        }; 

        return res.render('login', {
            errors: {
                email: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        });
    },
    profile: (req, res) => {
        return res.render('profile', {
            user: req.session.userLogged
        });
    },
    //eliminar la sesion
    logout: (req, res) => {
        res.clearCookie('userEmail'); //destruir cookie
        req.session.destroy();
        return res.redirect('/')
    }
} */