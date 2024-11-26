import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const LoginButton = styled.button<{ label: string }>`
  background-color: ${(props) => (props.label === '로그인' ? PALETTE.MAIN_BLUE : PALETTE.GRAY)};
  color: ${PALETTE.WHITE};
  border: none;
  border-radius: 5px;
  margin: 10px;
  padding: 10px 15px;
  cursor: pointer;
`;
