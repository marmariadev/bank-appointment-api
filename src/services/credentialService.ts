import ICredential from '../interfaces/ICredential';

const credentials: ICredential[] = [];

export const createCredential = (username: string, password: string): number => {
  const newCredential: ICredential = {
    id: credentials.length + 1,
    username,
    password,
  };
  credentials.push(newCredential);
  return newCredential.id;
};

export const checkCredential = (username: string, password: string): number | null => {
  const credential = credentials.find(cred => cred.username === username && cred.password === password);
  return credential ? credential.id : null;
};
