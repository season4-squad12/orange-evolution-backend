'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('trails', 'question', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('trails', 'response', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('trails', 'icone', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('trails', 'color', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('question');
    await queryInterface.removeColumn('response');
    await queryInterface.removeColumn('icone');
    await queryInterface.removeColumn('color');
  }
};
