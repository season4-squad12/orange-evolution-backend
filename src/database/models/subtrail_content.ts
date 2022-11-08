import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import content from './content';
import subtrails from './subtrails';

class subTrail_content extends Model {

}
subTrail_content.init({
  idSubtrail: {
    type: INTEGER,
    allowNull:false,
  },
  idContent: {
    type: INTEGER,
    allowNull:false,
  }
}, {
  sequelize: db,
  modelName: 'subTrail_content',
  timestamps: false,
});

subtrails.hasMany(subTrail_content, {
  foreignKey: 'idSubtrail'
});

subTrail_content.belongsTo(subtrails, {
  foreignKey: 'idSubtrail'
});

content.hasMany(subTrail_content, {
  foreignKey: 'idContent'
});

subTrail_content.belongsTo(content, {
  foreignKey: 'idContent'
});

export default subTrail_content;