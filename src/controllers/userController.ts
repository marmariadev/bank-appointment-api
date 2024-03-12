import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const getAllUsers = (req: Request, res: Response) => {
  const users = userService.getUsers();
  res.json(users);
};

export const getUser = (req: Request, res: Response) => {
  const user = userService.getUserById(parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};

export const registerUser = (req: Request, res: Response) => {
  const { name, email, birthdate, nDni, username, password } = req.body;
  // Aquí asumimo que el body ya contiene toda la información necesaria y validada
  const newUser = userService.createUser(name, email, new Date(birthdate), nDni, username, password);
  res.status(201).json(newUser);
};

export const loginUser = (req: Request, res: Response) => {
  res.send('Login del usuario.');
};
