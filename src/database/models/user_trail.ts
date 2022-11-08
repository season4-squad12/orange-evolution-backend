import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import trail from './trail';
import User from './user';

class user_trail extends Model {

}
user_trail.init({
  idUser: {
    type: INTEGER,
    allowNull: false,
  },
  idTrail: {
    type: INTEGER,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'user_trail',
  timestamps: false,
});

User.hasMany(user_trail, {
  foreignKey: 'idUser'
});

user_trail.belongsTo(User, {
  foreignKey: 'idUser'
});

trail.hasMany(user_trail, {
  foreignKey: 'idTrail'
});

user_trail.belongsTo(trail, {
  foreignKey: 'idTrail'
});

export default user_trail;