/* eslint-disable import/no-cycle */
import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Content from './content';

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

Subtrail.belongsToMany(Content, {
  through: 'subTrail_contents',
  as: 'conteúdos',
  foreignKey: 'idSubtrail',
});

Content.belongsToMany(Subtrail, {
  through: 'subTrail_contents',
  as: 'SubTrilhas',
  foreignKey: 'idContent',
});

export default Subtrail;
