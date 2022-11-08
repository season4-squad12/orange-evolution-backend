import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

  class content extends Model {
    
  }
  content.init({
    title: {
      type: STRING,
      allowNull: false,
    },
    description: {
      type: STRING,
      allowNull: false,
    },
    type: {
      type: STRING,
      allowNull: false,
    },
    author: { 
      type: STRING,
      allowNull: false,
    },
    duration: { 
      type: STRING,
      allowNull: false,
    },
    status: { 
      type: STRING,
      allowNull: false,
    },
    link: { 
      type: STRING,
      allowNull: false,
    },
    idUser: {
      type: INTEGER,
      allowNull:false,
    },
    experience: {
      type: INTEGER,
      allowNull:false,
    }
  }, {
    sequelize: db,
    modelName: 'content',
    timestamps: true,
  });
 
export default content;