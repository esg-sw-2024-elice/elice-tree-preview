import * as S from './AddTodo.styles';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { MSG_ERROR_VALIDATION_TODO_CONTENT } from '@/constants';

export default function AddTodo({ onClick }: { onClick: (todo: string) => void }) {
  const [enteredTodo, setEnteredTodo] = useState('');
  const handleChangeInputTodo = (e: ChangeEvent<HTMLInputElement>) =>
    setEnteredTodo(e.target.value);
  const handleClickBtnCreateTodo = () => {
    if (!enteredTodo || enteredTodo.trim() === '') {
      alert(MSG_ERROR_VALIDATION_TODO_CONTENT);
      return;
    }
    onClick(enteredTodo);
    setEnteredTodo('');
  };
  const handlePressKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') {
      return;
    }
    handleClickBtnCreateTodo();
  };
  return (
    <S.DivContainer>
      <S.InputTodo
        type="text"
        value={enteredTodo}
        onChange={handleChangeInputTodo}
        onKeyDown={handlePressKeyDown}
        placeholder="나무에 새길 할 일을 입력해보세요!"
      />
      <S.ButtonAddTodo onClick={handleClickBtnCreateTodo}>나무 심기</S.ButtonAddTodo>
    </S.DivContainer>
  );
}
