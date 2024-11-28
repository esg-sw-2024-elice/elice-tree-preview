import { ReactNode } from 'react';
import { GlobalStyle } from '@/styles/global-style';

export function GlobalStyleProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
