import { Router } from 'express';
import * as appointmentController from '../controllers/appointmentController';

const router = Router();

router.get('/', appointmentController.getAllAppointments);
router.get('/:id', appointmentController.getAppointment);
router.post('/schedule', appointmentController.scheduleAppointment);
router.put('/cancel/:id', appointmentController.cancelAppointment); // Nota: ':id' para cancelar un turno específico

export default router;
