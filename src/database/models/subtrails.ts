import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';


class subtrails extends Model {


}
subtrails.init({
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
  modelName: 'subtrails',
  timestamps: true,
});

export default subtrails;
