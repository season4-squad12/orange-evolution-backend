import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import subtrails from './subtrails';
import trail from './trail';

class trail_subtrail extends Model {


}
trail_subtrail.init({
  idTrail: {
    type: INTEGER,
    allowNull: false,
  },
  idSubtrail: {
    type: INTEGER,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'trail_subtrail',
  timestamps: false,
});

trail.hasMany(trail_subtrail, {
  foreignKey: 'idTrail'
});

trail_subtrail.belongsTo(trail, {
  foreignKey: 'idTrail'
});

trail.hasMany(trail_subtrail, {
  foreignKey: 'idSubtrail'
});

trail_subtrail.belongsTo(trail, {
  foreignKey: 'idSubtrail'
});


export default trail_subtrail;