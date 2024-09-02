import express from 'express';
import {createAppoiment, getAppoiment} from '../controllers/appoiment.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router=express.Router();

router.post('/create',verifyToken,createAppoiment);
router.get('/getappoiment',getAppoiment);

export default router;