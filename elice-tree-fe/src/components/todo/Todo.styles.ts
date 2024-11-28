import styled from 'styled-components';
import { PALETTE } from '@/styles';
import BaseButton from '@/components/shared/BaseButton';

export const ListContainer = styled.li`
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 8px;
`;

export const ButtonToggle = styled.button`
  width: 20px;
  height: 20px;
  border: 2px solid ${PALETTE.BLACK};
`;

export const SpanToggle = styled.span`
  position: relative;
  right: 1px;
  bottom: 1px;
`;

export const ParagraphTodoContent = styled.p<{ isCompleted: boolean }>`
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};
`;

export const ButtonDelete = styled(BaseButton)`
  margin: 0 0 0 auto;
`;
