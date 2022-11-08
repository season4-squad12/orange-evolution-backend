import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import subtrails from './subtrail';
import User from './user';

class Trail extends Model {}
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
}, {
  sequelize: db,
  modelName: 'Trail',
  timestamps: true,
});

Trail.belongsToMany(User, {
  through: 'user_trails',
  as: 'user',
  foreignKey: 'idTrail',
});

Trail.belongsToMany(subtrails, {
  through: 'trail_subtrails',
  as: 'subtrilhas',
  foreignKey: 'idTrail',
});

export default Trail;
