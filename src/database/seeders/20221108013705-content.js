'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        'contents',
        [
          {
            title: 'Design Para Quem Não é Designer: Princípios de Desig e Tipografia Para Iniciantes',
            type: 'Livro',
            author: 'Rob Williams',
            duration:'',
            status:'não iniciado',
            link:'https://www.amazon.com.br/dp/857416836X/ref=cm_sw_r_tw_dp_4AHBKZPKDK9J290N0T28?_encoding=UTF8&psc=1',
            idUser: 1 ,
            experience:100,
          }
        ]
      )
  },

  async down (queryInterface, Sequelize) {
   
  }
};
