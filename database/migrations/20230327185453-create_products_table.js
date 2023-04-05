'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(11,3),
        allowNull: false
      },
      item_1: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      item_2: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      item_3: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      item_4: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      item_5: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      product_categories_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'product_categories',
          key: 'id'
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('products');
  }
};
