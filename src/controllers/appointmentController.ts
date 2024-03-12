import { Request, Response } from 'express';
import * as appointmentService from '../services/appointmentService';

export const getAllAppointments = (req: Request, res: Response) => {
  const appointments = appointmentService.getAppointments();
  res.json(appointments);
};

export const getAppointment = (req: Request, res: Response) => {
  const appointment = appointmentService.getAppointmentById(parseInt(req.params.id));
  if (appointment) {
    res.json(appointment);
  } else {
    res.status(404).send('Appointment not found');
  }
};

export const scheduleAppointment = (req: Request, res: Response) => {
  const { date, time, userId } = req.body;
  // Suponiendo que el body ya está validado
  const newAppointment = appointmentService.createAppointment(new Date(date), time, userId);
  res.status(201).json(newAppointment);
};

export const cancelAppointmentController = (req: Request, res: Response) => {
  const { id } = req.params;
  appointmentService.cancelAppointment(parseInt(id));
  res.send(`Appointment ${id} cancelled.`);
};
