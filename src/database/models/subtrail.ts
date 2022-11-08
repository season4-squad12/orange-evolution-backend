import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Content from './content';
import Trail from './trail';

class Subtrail extends Model {}

Subtrail.init({
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
  modelName: 'subtrail',
  timestamps: true,
});

Subtrail.belongsToMany(Trail, {
  through: 'trail_subtrails',
  as: 'subtrilhas',
  foreignKey: 'idSubtrail',
});

Subtrail.belongsToMany(Content, {
  through: 'trail_subtrails',
  as: 'conteúdos',
  foreignKey: 'idSubtrail',
});

export default Subtrail;
