import styled from 'styled-components';
import BaseButton from './BaseButton';
import { TDialog } from './Modal';
import { PALETTE } from '@/styles';

type TProps = { $type: TDialog };

export const DialogContainer = styled.dialog`
  margin: auto;
  border: none;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const DivContainer = styled.div`
  padding: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Heading1Title = styled.h1<TProps>`
  color: ${({ $type }) =>
    $type === 'success'
      ? PALETTE.MAIN_PURPLE
      : $type === 'error'
        ? PALETTE.MAIN_RED
        : PALETTE.LIGHT_BLACK};
`;

export const ParagraphMessage = styled.p<TProps>`
  color: ${({ $type }) =>
    $type === 'success'
      ? PALETTE.MAIN_PURPLE
      : $type === 'error'
        ? PALETTE.MAIN_RED
        : PALETTE.LIGHT_BLACK};
`;

export const FormDialog = styled.form``;

export const ButtonConfirm = styled(BaseButton)<TProps>`
  padding: 8px 16px;
  background-color: ${({ $type }) =>
    $type === 'success'
      ? PALETTE.MAIN_PURPLE
      : $type === 'error'
        ? PALETTE.LIGHT_RED
        : PALETTE.MAIN_BLUE};
  color: ${({ $type }) =>
    $type === 'success'
      ? PALETTE.WHITE
      : $type === 'error'
        ? PALETTE.MAIN_RED
        : PALETTE.LIGHT_BLACK};
`;
