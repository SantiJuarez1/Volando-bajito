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
    await queryInterface.bulkInsert('users', [
      {
        fullname: 'Marcia Veron', username: 'marve', email: 'mar@travel.com', password: 'Hola123', avatar: 'avatar2.jpg'
      }, {
        fullname: 'Santiago Juares', username: 'santi', email: 'santi@travel.com', password: 'Hola678', avatar: 'avatar1.jpg'
      }, {
      fullname: 'Marcos Gutierrez', username: 'marc', email: 'marc@travel.com', password: 'Chau123', avatar: 'default-profile.webp'
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
    await queryInterface.bulkDelete('users', null, {});
  }
};
