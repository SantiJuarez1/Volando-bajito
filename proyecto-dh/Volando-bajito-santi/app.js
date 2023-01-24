const express = require ('express');

const mainRouter = require('./routers/main');

const app = express();

app.use(express.static('public'));

app.use('/',mainRouter);

app.listen(3000,() =>{
    console.log("Servidor Iniciado en http://localhost:3000")
})