//requerir express
const express = require('express');
const app = express();
//importar path
const path = require('path');
//importamos libreria method-override
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
require('dotenv').config();


//configurar el Template Engine
app.set('view engine', 'ejs');
//archivos estaticos
app.use(express.static('./public'));
//las vistas
app.set('views', path.join(__dirname, './views'));
//permite procesar el formulario
app.use(express.urlencoded({ extended: false }));
app.use(cookies());
app.use(express.json());
//la exportamos
app.use(methodOverride('_method'));
app.use(session({ 
    secret: "Shhhh, It's a secret",
    resave: false,
    saveUninitialized: false,
}));

//middlewares
const logMiddleware = require('./middlewares/logMiddleware');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(logMiddleware);
app.use(userLoggedMiddleware);

//las rutas
const products = require('./routes/products');
const admin = require('./routes/admin');
const users = require('./routes/users');


app.use('/', products);
app.use('/admin', admin);
app.use('/user', users);

//puerto
const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
