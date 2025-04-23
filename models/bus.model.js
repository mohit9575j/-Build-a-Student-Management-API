 // models/bus.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

export const Bus = sequelize.define('Bus', {
  busNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  totalSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  availableSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
