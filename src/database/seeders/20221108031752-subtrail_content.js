'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        'subTrail_contents',
        [
          {
            idSubtrail: 1,
            idContent: 1,
          }
        ]
      )
  },

  async down (queryInterface, Sequelize) {
  
  }
};
