/* eslint-disable import/no-cycle */
import { Model, INTEGER } from 'sequelize';
import db from '.';

class UserTrail extends Model {}

UserTrail.init({
  idUser: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  idTrail: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'user_trail',
  timestamps: false,
});

export default UserTrail;
