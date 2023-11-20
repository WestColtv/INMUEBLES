module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuarios', [{
      correoElectronico: 'veri_1234@gmail.com',
      cotraseña: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};



