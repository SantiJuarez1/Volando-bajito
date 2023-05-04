module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      description: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      price: {
        type: dataTypes.DECIMAL(11,3),
        allowNull: false
      },
      item_1: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      item_2: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      item_3: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      item_4: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      item_5: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      product_categories_id: {
        type: dataTypes.INTEGER
      }
    };
    let config = {
        timestamps: false,
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
      Product.belongsTo(models.Product_category, {
        as: 'product_categories',
        foreignKey: 'product_categories_id'
      });
    }

    return Product
};