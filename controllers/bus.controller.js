// controllers/bus.controller.js
import { Bus } from '../models/bus.model.js';

// ✅ Get all buses
export const getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.findAll();
    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching buses', error });
  }
};

// ✅ Get a single bus by ID
export const getBusById = async (req, res) => {
  try {
    const bus = await Bus.findByPk(req.params.id);
    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }
    res.status(200).json(bus);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bus', error });
  }
};

// ✅ Create a new bus
export const createBus = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;
    const newBus = await Bus.create({ busNumber, totalSeats, availableSeats });
    res.status(201).json(newBus);
  } catch (error) {
    res.status(500).json({ message: 'Error creating bus', error });
  }
};

// ✅ Update a bus
export const updateBus = async (req, res) => {
  try {
    const bus = await Bus.findByPk(req.params.id);
    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }
    await bus.update(req.body);
    res.status(200).json(bus);
  } catch (error) {
    res.status(500).json({ message: 'Error updating bus', error });
  }
};

// ✅ Delete a bus
export const deleteBus = async (req, res) => {
  try {
    const bus = await Bus.findByPk(req.params.id);
    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }
    await bus.destroy();
    res.status(200).json({ message: 'Bus deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting bus', error });
  }
};
