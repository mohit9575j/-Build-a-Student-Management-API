  


import express from 'express';
import db from './models/index.js';
import setupRoutes from './routes/index.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());


setupRoutes(app);

const startServer = async() => {
  try{
    await db.sequelize.sync({ alter: true });
    console.log('Database synced successfully ✅');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }catch(error){
    console.log('Error starting server:', error);
  }
}

startServer();