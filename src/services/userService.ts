import IUser from '../interfaces/IUser';
import { createCredential } from './credentialService';

const users: IUser[] = [];

export const getUsers = (): IUser[] => {
  return users;
};

export const getUserById = (id: number): IUser | undefined => {
  return users.find(user => user.id === id);
};

export const createUser = (name: string, email: string, birthdate: Date, nDni: string, username: string, password: string): IUser => {
  const credentialsId = createCredential(username, password);
  const newUser: IUser = {
    id: users.length + 1,
    name,
    email,
    birthdate,
    nDni,
    credentialsId,
  };
  users.push(newUser);
  return newUser;
};
