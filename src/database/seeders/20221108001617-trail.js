'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
    'trails',
    [
      {
       name: 'UI/UX', 
       description: 'Trilha para UX/UI'
      },
      {
        name: 'Desenvolvimento Full Stack',
        description: 'Trilha para desenvolvimento web'
      },
      {
        name: 'Quality Assurance (QA)',
        description: 'Trilha para QA'
      }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('trails',null,{})
  }
};
