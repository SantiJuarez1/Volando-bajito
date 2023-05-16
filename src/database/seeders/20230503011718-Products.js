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
      }, {
        title: 'Jousten Hotel', description: 'Se encuentra en el corazón de la ciudad, al lado del Edificio de Correos y la histórica Plaza de Mayo.', price: '12.000'
      }, {
        title: 'Hotel Salta', description: 'Se encuentra frente a la plaza 9 de Julio y cuenta con spa, gimnasio y piscina.', price: '8.600'
      }, {
        title: 'Hotel Mendoza', description: 'En el centro de la ciudad y de los restaurantes, ofrece piscina al aire libre, solárium y zona de barbacoa.', price: '9.500'
      }, {
        title: 'Edelweiss', description: 'Ofrece habitaciones amplias y luminosas con vistas al lago Nahuel Huapi y a las montañas nevadas.', price: '8.800'
      }, {
        title: 'Exe Hotel Cataratas', description: 'Ofrece un intenso contacto con la naturaleza, fantásticas piscinas y varias opciones de ocio.', price: '9.500'
      }, {
        title: 'Gran Panamericano', description: 'Ofrece habitaciones elegantes con wifi gratis. A 8 calles de la playa y varias opciones de ocio.', price: '12.000'
      }, {
        title: 'Caminito - La Boca', description: 'Esta calle museo es uno de los lugares más fotografiados del mundo: sus adoquines y los conventillos de chapa, con sus paredes pintadas de distintos colores, le dan un encanto único.', price: '1.200'
      }, {
        title: 'Jardin Japones - Buenos Aires', description: 'Rodeado por los Bosques de Palermo, Es el parque más grande de estilo japonés fuera del país nipón y cuenta con los elementos propios de su cultura.', price: '1.500'
      }, {
        title: 'Aconcagua - Mendoza', description: 'Esta área es conocida internacionalmente por el cerro más alto del hemisferio occidental, con 6962m. Protege el sector de la cordillera de los Andes donde alcanza la máxima altura de América, con numerosas cumbres que superan los 5.000m', price: '3.500'
      }, {
        title: 'Parque Nacional Nahuel Huapi - Rio Negro', description: 'Es un lago de origen glaciar, de allí sus aguas de intenso azul cristalino. Posee una superficie de 557 km² y se sitúa a una altitud de unos 700 metros sobre el nivel del mar. Se destaca por su profundidad y sus siete ramificaciones o brazos: Campanario, de la Tristeza, Blest, Machete, del Rincón, Última Esperanza y Huemul.', price: '6.800'
      }, {
        title: 'Buenos Aires Centro', description: 'Ofrece entornos naturales únicos y sustentables,experiencias de turismo comunitario en pequeños poblados, destinos accesibles distinguidos, gastronomía de excelencia y un legado histórico y cultural vinculado a la inmigración y a la tradición rural que la convierten en un lugar único e icónico para residentes locales y extranjeros.', price: '3.200'
      }, {
        title: 'Glaciar Perito Moreno - Bariloche', description: 'La octava maravilla del mundo, la imponente masa de hielo interminable rodeada de bosques y montañas es un espectáculo que pocos se quieren perder.', price: '8.200'
      }, {
        title: 'Parque Nacional Talampaya - La Rioja', description: 'En la región centro-oeste de la provincia de La Rioja, el área conserva importantes riquezas geológicas y paleontológicas pero también una muestra representativa de la ecorregión del Monte de Sierras y Bolsones con sus plantas y animales.', price: '5.600'
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
