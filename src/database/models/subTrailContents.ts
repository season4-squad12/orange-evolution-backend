/* eslint-disable import/no-cycle */
import { Model, INTEGER } from 'sequelize';
import db from '.';

class UserTrail extends Model {}

UserTrail.init({
  idSubTrail: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  idContent: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'subTrail_contents',
  timestamps: false,
});
