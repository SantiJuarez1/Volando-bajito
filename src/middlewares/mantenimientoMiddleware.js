const path = require('path');


function mantenimientoMiddleware(req, res, next) {
    let role = 1;  //Esto vendria en una variable de sesión luego que el usuario de loguea.  (Administrador == 9)
    if(role != 1){  
        return res.render('mantenimiento');
    }
    next();
}

module.exports = mantenimientoMiddleware;