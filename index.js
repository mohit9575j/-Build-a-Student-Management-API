import express from 'express';
import bodyParser from 'body-parser';
import db from './models/index.js';
import busRoutes from './routes/bus.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Bus routes use karo
app.use('/buses', busRoutes);
app.use('/users', userRoutes);

// Sync DB
db.sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced successfully ✅");
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error("Error syncing database:", err);
});
