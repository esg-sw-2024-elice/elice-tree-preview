import * as styled from 'styled-components';
import * as fontStyle from 'pretendard/dist/web/static/pretendard-dynamic-subset.css';
import { ReactNode } from 'react';

const GlobalStyle = styled.createGlobalStyle`
  ${fontStyle}
  body {
    margin: 0;
    padding: 0;
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
  }
`;

export function FontProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
