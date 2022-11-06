'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John',
          lastName: 'Doe',
          email: 'johndoe@email.com',
          password: 'admin',
          createdAt: '2022-11-06 02:04:35',
          role: 'admin'
        },
        {
          name: 'Julia',
          lastName: 'Alves',
          email: 'juliaalves@email.com',
          password: '1234',
          createdAt: '2022-11-06 02:04:35',
          role: 'student'
        }
    ], {}); 
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
