function checkUserMiddleware(req,res, next) {

    const users = [
        'Marcia', 'Santiago'
    ];

    const { user } = req.query;
    const userFound = users.map(element => element.toLowerCase())
        .includes(user?.toLowerCase());
    if (!userFound) {
        return res.send('No tienes los previlegios para ingresar');
    };
    
    next();
}

module.exports = checkUserMiddleware;