import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const ListContainer = styled.li`
  display: flex;
  gap: 16px;
  width: fit-content;
  padding: 8px;
  border: 1px solid ${PALETTE.GRAY};
  border-radius: 16px;
`;

export const DivTodoContent = styled.div<{ isCompleted: boolean }>`
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};
  width: 300px;
`;
