import { Model, INTEGER, STRING, ENUM } from 'sequelize';
import db from '.';

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
    allowNull: false,
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

export default User;
