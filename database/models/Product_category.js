module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: dataTypes.STRING(45)
          }
    };
    let config = {
        timestamps: false,
    }
    const Product_category = sequelize.define(alias, cols, config);

    return Product_category
};