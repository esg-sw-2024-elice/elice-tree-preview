import { ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import * as fontStyle from 'pretendard/dist/web/static/pretendard-dynamic-subset.css';

interface FontProviderProps {
  children: ReactNode;
}

const FontContainer = styled.div`
  font-family:
    'Pretendard Variable',
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    sans-serif;
`;

const GlobalStyle = createGlobalStyle`
  ${fontStyle}
`;

export function FontProvider({ children }: FontProviderProps) {
  return (
    <>
      <GlobalStyle />
      <FontContainer>{children}</FontContainer>
    </>
  );
}
