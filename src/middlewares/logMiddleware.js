//importar fs
const fs = require('fs');
const path = require('path');

function logMiddleware(req,res, next) {

    const LogsFile = path.join(__dirname, '../middlewares/userLogs.txt');

    fs.appendFileSync(LogsFile, `El usuario ingresó a la ruta: ${req.url}\n`);
    next();

}

module.exports = logMiddleware;