import { Sequelize } from 'sequelize';
import sequelize from '../config/db.js';
import { Bus } from './bus.model.js';
import { User } from './user.model.js';

const db = {
  sequelize,
  Sequelize,
  Bus,
  User
};

// For Sequelize operators like Op.gt
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;