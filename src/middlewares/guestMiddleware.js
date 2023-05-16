function guestMiddleware(req, res, next) {
    if(req.session.user) {
        return res.redirect('/user');
    }
    next();
}

module.exports = guestMiddleware;

