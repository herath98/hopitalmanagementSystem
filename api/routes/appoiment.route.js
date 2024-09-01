import express from 'express';
import {createAppoiment} from '../controllers/appoiment.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router=express.Router();

router.post('/create',verifyToken,createAppoiment);


export default router;