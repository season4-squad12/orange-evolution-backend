'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trail_subtrails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idTrail: {
        type: Sequelize.INTEGER,
        references: { model: 'trails', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      idSubtrail: {
        type: Sequelize.INTEGER,
        references: { model: 'subtrails', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('trail_subtrails');
  }
};