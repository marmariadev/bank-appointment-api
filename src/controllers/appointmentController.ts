import { Request, Response } from 'express';

export const getAllAppointments = (req: Request, res: Response) => {
  res.send('Listado de todos los turnos.');
};

export const getAppointmentById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Detalle del turno ${id}.`);
};

export const scheduleAppointment = (req: Request, res: Response) => {
  res.send('Agendar un nuevo turno.');
};

export const cancelAppointment = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Cancelar el turno ${id}.`);
};
