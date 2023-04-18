const express = require('express');
const path = require ("path");
/* const expressSession= require('express-session'); */
const mainRouter= require ('./routers/main');
const app = express();

/* app.use(express.json());
app.use(express.urlencoded( {extended: false} ));
app.use(expressSession( {secret:'secret'} )); */
app.use('/', mainRouter);

app.use(express.static('public'));  

app.set("view engine", "ejs");
app.set ("views", path.join(__dirname, './views'));

app.listen(3000,() =>{
    console.log("Servidor Iniciado en http://localhost:3000");
})