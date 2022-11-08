'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('subTrail_contents', {
      
      idSubtrail: {
        type: Sequelize.INTEGER,
        references: { model: 'subtrails', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      idContent: {
        type: Sequelize.INTEGER,
        references: { model: 'contents', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subTrail_contents');
  }
};