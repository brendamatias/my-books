/* eslint-disable react/jsx-no-constructed-context-values */
import AuthService from '@/services/auth.service';
import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';
import { toast } from 'react-toastify';
import ErrorList from '@/config/errors';
import { SignInRequestData } from '@/types';
import UserService from '@/services/user.service';
import AuthLayout from '@/components/_layouts/auth';
import DefaultLayout from '@/components/_layouts/default';

type User = {
  name: string;
  email: string;
  avatar_url: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (data: SignInRequestData) => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  const Layout = isAuthenticated ? DefaultLayout : AuthLayout;

  function signOut() {
    destroyCookie(undefined, 'my-books.token');

    setUser(null);
    Router.push('/');
  }

  useEffect(() => {
    const { 'my-books.token': token } = parseCookies();

    if (token) {
      UserService.getProfile()
        .then((response) => {
          setUser(response.user);
        })
        .catch((err) => {
          toast.error(ErrorList.INTERNAL_SERVER_ERROR);
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInRequestData) {
    try {
      const response = await AuthService.signInRequest({
        email,
        password,
      });

      setCookie(undefined, 'my-books.token', response.token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      setUser(response.user);

      Router.push('/home');
    } catch (err: any) {
      toast.error(err?.message || ErrorList.INTERNAL_SERVER_ERROR);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      <Layout>{children}</Layout>
    </AuthContext.Provider>
  );
}
