import styled from 'styled-components';
import { PALETTE } from 'styles';
import { BaseButton } from 'components';

export const Button = styled(BaseButton)<{ content: string }>`
  background-color: ${(props) =>
    props.content === '완료' ? PALETTE.MAIN_PURPLE : PALETTE.LIGHT_GREEN};
  color: ${PALETTE.MAIN_BLACK};
  cursor: pointer;
`;
