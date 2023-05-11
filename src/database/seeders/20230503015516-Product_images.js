'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Product_images', [
      {
        name: 'misiones.jpg'
      }, {
        name: 'cordoba.jpg'
      }, {
        name: 'mendoza.jpg'
      }, {
        name: 'mar-dl-plata.jpg'
      }, {
        name: 'bariloche.jpg'
      }, {
        name: 'salta.jpg'
      }, {
        name: 'H1.jpg'
      }, {
        name: 'H2.jpeg'
      }, {
        name: 'H3.jpeg'
      }, {
        name: 'h4.jpeg'
      }, {
        name: 'h5.webp'
      }, {
        name: 'h8.jpg'
      }, {
        name: 'caminito.jpg'
      }, {
        name: 'jardinjapones.jpg'
      }, {
        name: 'aconcuaga.jpg'
      }, {
        name: 'nahuelhuapi.jpg'
      }, {
        name: 'bsasnoche.jpg'
      }, {
        name: 'glaciar.jpg'
      },  {
        name: 'elmonje.jpg'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Product_images', null, {});
  }
};
