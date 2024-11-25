import styled from 'styled-components';
import { BaseButton } from 'components';
import { PALETTE } from 'styles';

export const TodolistButtonWrapper = styled(BaseButton)`
  background-color: ${PALETTE.MAIN_PURPLE};
  color: white;
  cursor: pointer;
`;
