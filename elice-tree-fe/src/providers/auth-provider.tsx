import { createContext, PropsWithChildren, useState } from 'react';

export const CtxAuth = createContext<{
  isAuthenticated: boolean;
  signIn: () => void;
  signUp: () => void;
  signOut: () => void;
}>({
  isAuthenticated: false,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const signIn = () => setIsAuthenticated(true);
  const signUp = () => setIsAuthenticated(true);
  const signOut = () => setIsAuthenticated(false);
  return (
    <CtxAuth.Provider
      value={{
        isAuthenticated,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </CtxAuth.Provider>
  );
}
