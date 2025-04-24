
import {DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

const student = sequelize.define('student' , {
  name:{
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEMpty: true,
    }
  },
  email:{ 
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{
      isEmail: true,
    }
  },
  age:{
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
  {
    timestamps: false,
    tableName: 'students'
  }
);

export default student;
