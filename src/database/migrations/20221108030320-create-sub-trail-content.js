'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('subTrail_contents', {
      
      idSubtrail: {
        type: Sequelize.INTEGER
      },
      idContent: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subTrail_contents');
  }
};