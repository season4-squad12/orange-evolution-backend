![Cover_projeto_Github](https://miro.medium.com/max/1400/1*vV5CkHRfI9UuzMiJxfLiLg.webp)

<div>
    <a href="#sobre">Sobre</a> - 
    <a href="#especificacoes">Especificações</a> - 
    <a href="#comorodaroprojeto">Como Rodar o Projeto?</a> - 
    <a href="#resultados"> Resultados de Desenvolvimento</a> - 
    <a href="#features">Features</a> </li> - 
    <a href="#conteudoexterno">Conteúdo externo</a> - 
    <a href="#nossosquad">Nossa Equipe</a> 
</div>

<h2 id="sobre">Sobre</h2>
  
  <p>O Orange Evolution é a plataforma ideal para quem busca se tornar um #SangueLaranja, dando os primeiros passos ou se aprimorando varias áreas de conhecimento, com conteúdos de qualidade criados com muito carinho e disponibilizados de forma gratuita!</p>
  <p>A plataforma foi construída pelo Squad 12 durante o Hackathon do Programa de Formação Season 4, da FCamara.</p>
  
<h2 id="especificacoes">Especificações</h2>
  
  
  
   <p>O front-end foi construído utilizando JavaScript, com auxílio da biblioteca React para construção das telas dinâmicas. Além disso, foi utilizada a biblioteca Styled-Components para estilização, seguindo o padrão mobile-first. A biblioteca Axios foi utilizada para realizar as chamadas ao back-end. Para gerenciar a renderização conforme as rotas foi utilizado React-Router.</p>
  
<h2 id="comorodaroprojeto">Como rodar o projeto?</h2>
  
Realizamos o deploy da nossa solução na plataforma Heroku. Você pode acessá-la através do seguinte [link]()! 🤓✨



Para acessar nossa plataforma em ambiente de desenvolvimento, siga os passos a seguir:

OBSERVAÇÃO: nosso projeto está dividido em dois repositórios no GitHub. O tutorial abaixo informa como fazer a configuração completa do projeto.
  ``` bash
  #Faça o clone dos repositórios Front-end e Back-end:
  ##Front-end
  $ git clone https://github.com/season4-squad12/orange-evolution-frontend

  ##Back-end
  $ git clone https://github.com/season4-squad12/orange-evolution-backend

  #Em seguida, entre na pasta do front-end e instale as dependências:
  
  $ npm install
  
  #Ainda na pasta do front-end, crie um arquivo .env na raiz, utilizando as variáveis de ambiente informadas pelos desenvolvedores:
  
  $ URL_BASE="****"
  
  #Feita a configuração da pasta do front-end, entre na pasta do back-end e instale as dependências:
  
  $ npm install
  
  #Crie um arquivo .env na raiz da pasta do back-end, utilizando as variáveis de ambiente informadas pelos desenvolvedores:
  
   DEV_DATABASE_URL="****"
   NODE_ENV="****"
   DIALECT="****"
   SECRET_KEY="****"
   PORT="****"
  
  
  # Após instalar as dependências e configurar as variáveis de ambiente, entre na pasta do Back-end e rode: 
  
  $ npm run dev
  
  # Com o servidor back-end rodando, entre na pasta front-end e rode o comando:
  
  $ npm start
  
  ```
  
  <h2 id="resultados">Resultados de desenvolvimento</h2>
  
  * Implementação de design responsivo seguindo padrão mobile-first;
  * Seleção das trilhas de estudo;
  * Visualização das trilhas de estudos e seus respectivos módulos;
  * Campo para enviar feedback, bem como o armazenamento dos mesmos para serem acessados pelo admin;
  * Possibilidade de criação de novas trilhas, módulos e conteúdos, além da atualização ou exclusão das trilhas já existentes por parte dos administradores da plataforma;
  <br/>
  
  
  
  <h2 id="features">Futuras implementações</h2>
  
  Para o futuro da nossa aplicação, planejamos as seguintes implementações:
  * Recuperação de senha na tela de login;
  * Permitir atualização de foto de perfil;
  * Acompanhamento do percentual de conteúdos já estudados;
  * Possibilidade de editar o próprio perfil, para manter sempre atualizado;
  * Avaliação de 1 até 5 estrelas dos conteúdos disponibilizados;
  * Campo para que os admins disponibilizem testes para os usuários da plataforma;
  * Sistema de gamificação em que os usuários ganham XP ao completarem as atividades;
  
  <h2 id="conteudoexterno">Conteúdo externo</h2>
  * No nosso artigo é possível encontar uma visão mais completa do processo de desenvolvimento: <a href="https://medium.com/@alex.matos/plataforma-orange-evolution-o-ensino-que-se-adapta-%C3%A0-sua-evolu%C3%A7%C3%A3o-profissional-4cec6578fb02">Artigo</a>

  * Confira como utilizar nossa plataforma e todas suas funcionalidades: 

  * Veja nosso Pitch: 
  
  <h2 id="nossosquad">Nosso Squad</h2>

  
  Luiz Felipe (Desenvolvedor) <a href="https://www.linkedin.com/in/felipe-nascimento-web-developer/"> LinkedIn</a>
  
  Dheniarley Cruz (Desenvolvedor) <a href="https://www.linkedin.com/in/dheniarley/"> LinkedIn</a>

  Alex Matos (UI/UX Design) <a href="https://www.linkedin.com/in/alexmt/"> LinkedIn</a>
