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
    await queryInterface.bulkInsert('products', [
      {
        title: 'Misiones', description: 'Cataratas, suelo rojizo, selva generosa: emblemas de un territorio incomparable, cuyo nombre recuerda a los pueblos jesuíticos, sin negar las raíces de la América indígena.', price: '33.000'
      }, {
        title: 'Cordoba', description: 'Cultural e histórica, tradicional y moderna, síntesis de naturaleza y urbanismo con un monton de paisajes para visitar, la Docta es la segunda provincia más poblada de la Argentina.', price: '20.000'
      }, {
        title: 'Mendoza', description: 'Destacada por su belleza paisajística y su valioso patrimonio histórico, se encuentra entre las provincias más desarrolladas del país.', price: '25.000'
      }, {
        title: 'Mar del Plata', description: 'El principal centro turístico de playa de Argentina, presenta 16 kilómetros de playas que van de La Perla en el norte, perfecta para familias, a la popular Bristol en el centro y la sofisticada Faro en el sur.', price: '18.000'
      }, {
        title: 'Bariloche', description: 'Te invitamos a embarcarte y recorrer el lago Nahuel Huapi llegando a la increíble Isla Victoria y el maravilloso Bosque de Arrayanes.', price: '35.000'
      }, {
        title: 'Salta', description: 'Contempla el desierto y la selva aunados por valles y quebradas, la provincia fue baluarte histórico de la independencia argentina.', price: '29.000'
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
    await queryInterface.bulkDelete('products', null, {});
  }
};
