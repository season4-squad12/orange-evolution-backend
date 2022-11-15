'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'message_feedbacks',
      [
        {
          idUser: 2,
          message: "O conteúdo das aulas são bons porém o app tá cheio de bugs com os vídeos. Oque mais me irrita é o vídeo que não desabilita o tempo de...",
          trail: "UX",
          subtrail: "o inicio",
          content: "",
          createdAt: '2022-11-06 02:04:35',
          updatedAt: '2022-11-06 02:04:35',
        },
        {
          idUser: 2,
          message: "O conteúdo das aulas são bons porém o app tá cheio de bugs com os vídeos. Oque mais me irrita é o vídeo que não desabilita o tempo de...",
          trail: "",
          subtrail: "UX",
          content: "",
          createdAt: '2022-11-06 02:04:35',
          updatedAt: '2022-11-06 02:04:35',
        },
        {
          idUser: 2,
          message: "O conteúdo das aulas são bons porém o app tá cheio de bugs com os vídeos. Oque mais me irrita é o vídeo que não desabilita o tempo de...",
          trail: "UX",
          subtrail: "o inicio",
          content: "",
          createdAt: '2022-11-06 02:04:35',
          updatedAt: '2022-11-06 02:04:35',
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
