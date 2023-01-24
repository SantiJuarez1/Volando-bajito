const path = require('path');

const controller = {
    index: (req,res) => {
      res.sendFile(path.join(__dirname,'../views/index.html'));
    },
    carrito: (req,res) => {
        res.sendFile(path.join(__dirname,'../views/carrito.html'));
      }
};

module.exports = controller;