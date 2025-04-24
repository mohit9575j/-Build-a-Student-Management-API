import studentRoutes from './student.routes.js';

const setupRoutes = (app) => {
  app.use('/students', studentRoutes);
};

export default setupRoutes;
