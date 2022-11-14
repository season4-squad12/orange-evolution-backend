'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_trails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        allowNull: false,
      },
      idTrail: {
        type: Sequelize.INTEGER,
        references: { model: 'trails', key: 'id' },
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_trails');
  }
};