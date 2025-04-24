 
import express from 'express';
import {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} from '../controllers/student.controller.js';

const router = express.Router();

router.post('/', addStudent); // Add a new student
router.get('/', getAllStudents); // Get all students      
router.get('/:id', getStudentById); // Get a student by ID
router.put('/:id', updateStudent); // Update a student by ID
router.delete('/:id', deleteStudent); // Delete a student by ID

export default router;