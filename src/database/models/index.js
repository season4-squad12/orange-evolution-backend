import { Sequelize } from "sequelize";

const config = require('../config/config')

const sequelize = new Sequelize(config.development);

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}