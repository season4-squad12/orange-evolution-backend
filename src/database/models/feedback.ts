/* eslint-disable import/no-cycle */
import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import User from './user';

class Feedback extends Model {

}
Feedback.init({
  idUser: {
    type: INTEGER,
    allowNull: false,
  },
  message: {
    type: STRING,
    allowNull: false,
  },
  trail: {
    type: STRING,
    allowNull: false,
  },
  subtrail: {
    type: STRING,
    allowNull: false,
  },
  content: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'content',
  timestamps: true,
});

Feedback.hasMany(User, { foreignKey: 'idUser' });
User.belongsTo(User, { foreignKey: 'idUser' });

export default Feedback;
