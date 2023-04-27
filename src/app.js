//modulos externos
require('dotenv').config();
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
//modulos internos
/* const products = require('./src/routes/products');
const admin = require('./routes/admin'); */
const userRoutes = require('./routes/user'); 

const app = express();
//configurar el Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //las vistas

//Middlewares Globales
app.use(cookies());
app.use(methodOverride('_method'));
app.use(session({  //incriptacion
    secret: process.env.SECRET || "secret",
    resave: false,
    saveUninitialized: false,
}));
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //permite procesar el formulario
app.use(express.static(path.join(__dirname, 'public'))) //archivos estaticos

//middlewares
const logMiddleware = require('./middlewares/logMiddleware');
const authentication = require('./middlewares/authentication');
/* const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware'); */

app.use(logMiddleware);
app.use(authentication);
/* app.use(userLoggedMiddleware); */

//declaracion de rutas
/* app.use('/', products);
app.use('/admin', admin); */
app.use('/user', userRoutes);

//puerto
const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
