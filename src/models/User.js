const fs = require('fs');


const User = {
    fileName: './src/data/users.json',
//traer el archivo JSON en array
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    //metodo para generar un id
    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();//obtengo el ultimo id
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

//obtener todos los usuarios
    findAll: function () {
        return this.getData();
    },

//buscar usuario por id 
    findByPk: function (id) {
        //todos los usuarios
        let allUsers = this.findAll();
        //encontrar usuario x id
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

//buscar usuario por cualquier campo
    findByField: function (field, text) {
    //todos los usuarios
    let allUsers = this.findAll();
    //encontrar usuario x id
    let userFound = allUsers.find(oneUser => oneUser[field] === text);
    return userFound;
    },

//guardar usuario
    create: function (userDate) {
         //todos los usuarios
        let allUsers = this.findAll();
        //crear nuevo usuario
        let newUser = {
            id: this.generateId(),
            ...userDate
        }
        //insertarle al array el nuevo usuario
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },
    //eliminar usuario
    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}


module.exports = User;