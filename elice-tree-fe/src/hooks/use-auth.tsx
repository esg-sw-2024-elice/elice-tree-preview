import { useContext } from 'react';
import { CtxAuth } from '@/providers/auth-provider';

export const useAuth = () => {
  const { isAuthenticated, signIn, signUp, signOut } = useContext(CtxAuth);
  return {
    isAuthenticated,
    signIn,
    signUp,
    signOut,
  };
};
