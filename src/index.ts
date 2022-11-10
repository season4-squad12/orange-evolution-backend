import app from './app';

const { PORT } = process.env;

const server = app.listen(PORT, () => console.log(
  `Aplicação escutando na porta: ${PORT}`,
));

export default server;
