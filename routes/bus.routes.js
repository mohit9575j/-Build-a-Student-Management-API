// routes/bus.routes.js
import express from 'express';
import {
  getAllBuses,
  getBusById,
  createBus,
  updateBus,
  deleteBus,
} from '../controllers/bus.controller.js';

const router = express.Router();

router.get('/', getAllBuses);        // GET /buses
router.get('/:id', getBusById);      // GET /buses/:id
router.post('/', createBus);         // POST /buses
router.put('/:id', updateBus);       // PUT /buses/:id
router.delete('/:id', deleteBus);    // DELETE /buses/:id

export default router;
