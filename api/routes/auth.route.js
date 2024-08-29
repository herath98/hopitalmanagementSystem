import express from 'express';

import { signup } from '../controllers/auth.controller.js';

const router =express.Router();


// This route handles user signup
router.post('/signup', signup);


export default router; 