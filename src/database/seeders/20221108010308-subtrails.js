'use strict';

const { QueryInterface } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'subtrails',
      [
        {
          name: 'O inicio',
          description: 'Primeiros passos para iniciar sua trilha'
        },
        {
          name: 'Conceitos Básicos',
          description: 'Conteúdo básico para continuar sua trilha'
        },
        {
          name: 'Opcional',
          description: 'Conteúdo extra para sua formação'
        }
      ]
    )
 
  },

  async down (queryInterface, Sequelize) {
    await QueryInterface.bulkDelete('subtrails', null,{})
  }
};
