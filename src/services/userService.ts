import IUser from '../interfaces/IUser';
import * as credentialService from './credentialService';

const users: IUser[] = [];

export const getUsers = (): IUser[] => {
  return users;
};

export const getUserById = (id: number): IUser | undefined => {
  return users.find(user => user.id === id);
};

export const createUser = (name: string, email: string, birthdate: Date, nDni: string, username: string, password: string): IUser => {
  const credentialsId = credentialService.createCredential(username, password);
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

export const loginUser = (username: string, password: string): IUser | null => {
  const credentialId = credentialService.checkCredential(username, password);
  if (credentialId !== null) {
    return users.find(user => user.credentialsId === credentialId) || null;
  }
  return null;
};
