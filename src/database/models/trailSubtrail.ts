/* eslint-disable import/no-cycle */
import { Model, INTEGER } from 'sequelize';
import db from '.';

class UserTrail extends Model {}

UserTrail.init({
  idTrailr: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  idSubTrail: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'trail_subtrails',
  timestamps: false,
});
