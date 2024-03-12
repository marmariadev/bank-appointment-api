import IAppointment from '../interfaces/IAppointment';

const appointments: IAppointment[] = [];

export const getAppointments = (): IAppointment[] => {
  return appointments;
};

export const getAppointmentById = (id: number): IAppointment | undefined => {
  return appointments.find(appointment => appointment.id === id);
};

export const createAppointment = (date: Date, time: string, userId: number): IAppointment => {
  const newAppointment: IAppointment = {
    id: appointments.length + 1,
    date,
    time,
    userId,
    status: 'active',
  };
  appointments.push(newAppointment);
  return newAppointment;
};

export const cancelAppointment = (id: number): void => {
  const appointment = appointments.find(appointment => appointment.id === id);
  if (appointment) {
    appointment.status = 'cancelled';
  }
};
