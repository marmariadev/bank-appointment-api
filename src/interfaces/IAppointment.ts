interface IAppointment {
  id: number;
  date: Date;
  time: string; // Considerando formato "HH:MM"
  userId: number;
  status: 'active' | 'cancelled';
}

export default IAppointment;
