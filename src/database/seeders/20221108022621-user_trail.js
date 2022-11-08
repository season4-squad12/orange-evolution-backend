'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'user_trails',
      [
        {
          idUser: 2,
          idTrail: 1,
        },
        {
          idUser: 2,
          idTrail: 2,
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    
  }
};
