import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';


export const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true // This ensures the name isn't an empty string
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true // This validates that the email is in correct format
    }
  }
}, {
  timestamps: false,
  tableName: 'users'
});