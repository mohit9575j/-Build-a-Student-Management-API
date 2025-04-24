import sequelize from '../config/db.js';
import Student from './student.model.js';

const db = {};
db.sequelize = sequelize;
db.Student = Student;

export default db;
