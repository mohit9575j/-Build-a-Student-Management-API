 

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// ✅ Use environment variables correctly
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,  // Use DB_HOST from the .env file
  dialect: 'mysql',  // You can change it to other databases like 'postgres' or 'sqlite' if needed
  logging: false,  // Optional: Disable SQL query logging for cleaner console output
});

export default sequelize;

