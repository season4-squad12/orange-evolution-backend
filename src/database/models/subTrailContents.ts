/* eslint-disable import/no-cycle */
import { Model, INTEGER } from 'sequelize';
import db from '.';

class SubtrailContent extends Model {}

SubtrailContent.init({
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

export default SubtrailContent;
