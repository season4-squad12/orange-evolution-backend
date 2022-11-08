'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'trail_subtrails',
      [
        {
          idTrail: 1,
          idSubtrail: 1,
        },
        {
          idTrail: 1,
          idSubtrail: 2,
        },
        {
          idTrail: 1,
          idSubtrail: 3,
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
   
  }
};
