//modulos externos
require('dotenv').config();
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
//modulos internos
const products = require('./routes/products');
const users = require('./routes/user'); 
const main = require('./routes/main');
const api = require("./routes/api"); 

const app = express();
//configurar el Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //las vistas

//Middlewares Globales
app.use(cookies());
app.use(session({  //incriptacion
    secret: process.env.SECRET || "secret",
    resave: false,
    saveUninitialized: false,
}));
app.use(methodOverride('_method'));
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //permite procesar el formulario
app.use(express.static(path.join(__dirname, 'public'))) //archivos estaticos

//middlewares
const logMiddleware = require('./middlewares/logMiddleware');
const authenticationMiddleware = require('./middlewares/authenticationMiddleware');


app.use(logMiddleware);
app.use(authenticationMiddleware);


//declaracion de rutas
app.use('/', products);
app.use('/user', users);
app.use('/products', main); 
app.use("/api/", api);

//puerto
const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
