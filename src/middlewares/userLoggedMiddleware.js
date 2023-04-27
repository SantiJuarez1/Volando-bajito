const User = require('../models/User');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = true;

    const emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);

    console.log(userFromCookie)
    
    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    if (req.session.userLogged) {
        res.locals.isLogged = false;
    }

   

    


    next();
}

module.exports = userLoggedMiddleware;