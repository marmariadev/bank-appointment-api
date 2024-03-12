import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response) => {
  res.send('Obtener todos los usuarios.');
};

export const getUserById = (req: Request, res: Response) => {
  res.send(`Detalle del usuario ${req.params.id}.`);
};

export const registerUser = (req: Request, res: Response) => {
  res.send('Registro de un nuevo usuario.');
};

export const loginUser = (req: Request, res: Response) => {
  res.send('Login del usuario.');
};
