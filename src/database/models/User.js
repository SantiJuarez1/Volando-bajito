module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      fullname: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      username: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      email: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      password: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      avatar: {
        type: dataTypes.TEXT,
      },
      roles_id: {
        type: dataTypes.INTEGER
      }
    };
    let config = {
        timestamps: false,
        tableName: 'users'
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
      User.belongsTo(models.Role, {
        as: 'role',
        foreignKey: 'roles_id'
      });
    }

    return User
};