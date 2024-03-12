import { Request, Response } from 'express';
import * as userService from '../services/userService';
import * as credentialService from '../services/credentialService';

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
  const { username, password } = req.body;
  // Usar checkCredential para verificar las credenciales del usuario.
  const credentialsId = credentialService.checkCredential(username, password);
  
if (credentialsId !== undefined) {
    // Si las credenciales son correctas, encuentra al usuario correspondiente.
    const user = userService.getUsers().find(user => user.credentialsId === credentialsId);
    
    if (user) {
        // Si se encuentra al usuario, login exitoso.
        res.json({ message: 'Login successful', userId: user.id });
    } else {
        // Si no se encuentra al usuario, aunque las credenciales sean correctas.
        res.status(404).send('User not found');
    }
} else {
    // Si las credenciales son inválidas.
    res.status(401).send('Invalid credentials');
}
};
