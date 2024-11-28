import styled from 'styled-components';
import BaseButton from '@/components/shared/BaseButton';

export const DivContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const InputTodo = styled.input`
  position: absolute;
  bottom: 20%;
  width: 80%;
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ButtonAddTodo = styled(BaseButton)`
  position: absolute;
  bottom: 20%;
  right: 10%;
  height: 33px;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: transparent;
`;
