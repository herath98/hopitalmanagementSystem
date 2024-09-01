import express from 'express';
import createAppoiment from '../controllers/appoiment.controller.js';

const router=express.Router();

router.post('/create',createAppoiment);


export default router;