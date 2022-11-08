'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trail_subtrails', {
      
      idTrail: {
        type: Sequelize.INTEGER
      },
      idSubtrail: {
        type: Sequelize.INTEGER
      },
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('trail_subtrails');
  }
};