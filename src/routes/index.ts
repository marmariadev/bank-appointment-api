import { Router } from 'express';
import userRoutes from './userRoutes';
import appointmentRoutes from './appointmentRoutes';

const router = Router();

router.use('/users', userRoutes);
router.use('/appointments', appointmentRoutes);

export default router;
