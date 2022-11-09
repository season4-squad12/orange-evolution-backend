import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class trail extends Model {


}
trail.init({
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
  }
}, {
  sequelize: db,
  modelName: 'trail',
  timestamps: true,
});

export default trail;