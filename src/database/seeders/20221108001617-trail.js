'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'trails',
      [
        {
          name: 'UI/UX',
          description: 'UX Design, UX Research, Design Thinking, Benchmarking, Persona, Mapa de Empatia, Fluxo de Usuário, Jornada do Usuário...',
          question: 'O que faz a pessoa UX/UI?',
          response: 'Responsável pela experiência e navegação dos usuários em multiplataformas como websites e aplicações mobile.',
          icone: '',
          color: '#F225C0'
        },
        {
          name: 'Desenvolvimento Full Stack',
          description: 'Lógica de Programação, Terminal Linux, Shell Script, Versionamento com Git, SQL, HTML, CSS, Bootstrap, Less, Javascript...',
          question: 'O que faz a pessoa FullStack?',
          response: 'Profissional multitarefa que cobre várias frentes na área de TI, pois pode trabalhar com diferentes linguagens.',
          icone: '',
          color: '#00C19C'
        },
        {
          name: 'Quality Assurance (QA)',
          description: 'Cases reais, Qualidade de Software, Testes, Automação de Testes, BDD, Github, Bugs, Banco de Dados, QA no Backend...',
          question: 'O que faz a pessoa QA?',
          response: 'Responsável por analisar todos os aspectos de utilização do software ou aplicação, garantindo a qualidade.',
          icone: '',
          color: '#8819D2'
        }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('trails', null, {})
  }
};
