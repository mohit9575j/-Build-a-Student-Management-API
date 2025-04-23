import express from 'express';
import { addUser, getUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/users', addUser);
router.get('/users', getUsers);

export default router;