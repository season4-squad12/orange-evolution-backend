/* eslint-disable import/no-cycle */
import { Model, INTEGER, STRING, ENUM } from 'sequelize';
import db from '.';
import Trail from './trail';

class User extends Model {}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  lastName: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: true,
  },
  role: {
    type: ENUM('admin', 'student'),
    defaultValue: 'student',
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'user',
  timestamps: true,
});

User.belongsToMany(Trail, {
  through: 'user_trails',
  as: 'trilhas',
  foreignKey: 'idUser',
});

Trail.belongsToMany(User, {
  through: 'user_trails',
  as: 'usuários',
  foreignKey: 'idTrail',
});

export default User;
