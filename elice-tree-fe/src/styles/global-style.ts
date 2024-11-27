import * as styled from 'styled-components';
import * as fontStyle from 'pretendard/dist/web/static/pretendard-dynamic-subset.css';

export const GlobalStyle = styled.createGlobalStyle`
  ${fontStyle}

  * {
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

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }

  a,
  button {
    cursor: pointer;

    &:hover,
    &:active {
      opacity: 0.8;
    }

    &:focus {
      outline: none;
    }
  }

  *:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
