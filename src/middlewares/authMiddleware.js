// PARA DB

function authMiddleware(req, res, next) {
    if(!req.session.user) {
        return res.redirect('/user/login');
    }
    next();
}

module.exports = authMiddleware;

/* PARA JSON
function auth(req, res, next) {
    if(!req.session.userLogged) {
        return res.redirect('/user/login');
    }
    next();
}

module.exports = auth; */