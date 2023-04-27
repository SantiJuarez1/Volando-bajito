//middleware global para todas las vistas a la session
function authentication(req, res, next) {
    if(req.session.user) {
        res.locals.session = req.session.user;
    }
    next();
}

module.exports = authentication; 