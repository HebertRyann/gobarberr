import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import { useToast } from './Toast';

interface User {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContext {
  user: User;
  SignIn(credentials: SignInCredentials): Promise<void>;
  SignOut(): void;
  updateUser(user: User): void;
}

interface AuthState {
  user: User;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();
  const [usersData, setUsersData]  = useState<User[]>([]);
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) }
    }
    return {} as AuthState;
  });
  const SignIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = usersData.find(user => user.email === email);
    if(!response) {
      addToast({
        title: 'Erro na Autenticaçao',
        type: 'error',
        description: 'Ocorreu um Erro ao fazer login'
      });
    } else {
      localStorage.setItem('@GoBarber:user', JSON.stringify(response));
      setData({ user: response });
    }
  }, [])

  const SignOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:user');
    setData({} as AuthState);
  }, []);


  const updateUser = useCallback((user: User) => {
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));
    setData({
      user,
    })
  }, [setData]);

  return (
    <AuthContext.Provider value={{ user: data.user, SignIn, SignOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used whitin an AuthProvider')
  }
  return context;
}
