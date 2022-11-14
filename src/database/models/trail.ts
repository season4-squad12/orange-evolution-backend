/* eslint-disable import/no-cycle */
import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Subtrail from './subtrail';

class Trail extends Model {
}
Trail.init({
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
  description: {
    type: STRING,
    allowNull: false,
  },
  question: {
    type: STRING,
    allowNull: false,
  },
  response: {
    type: STRING,
    allowNull: false,
  },
  icone: {
    type: STRING,
    allowNull: false,
  },
  color: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'trail',
  timestamps: true,
});

Trail.belongsToMany(Subtrail, {
  through: 'trail_subtrails',
  as: 'subtrilhas',
  foreignKey: 'idTrail',
});

Subtrail.belongsToMany(Trail, {
  through: 'trail_subtrails',
  as: 'trilhas',
  foreignKey: 'idSubtrail',
});

export default Trail;
