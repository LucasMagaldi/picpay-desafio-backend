'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      type: 'lojista',
      name: 'John Doe',
      cpf: '11111111111',
      email: 'john@outlook.com',
      created_at: new Date(),
      updated_at: new Date()
    }]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
