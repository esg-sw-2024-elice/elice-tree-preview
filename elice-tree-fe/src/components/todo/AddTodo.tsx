import * as S from './AddTodo.styles';
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { TEXT_ADD_TODO_BUTTON_ADD, TEXT_ADD_TODO_INPUT_PLACEHOLDER } from '@/constants';
import { validateIsEmpty } from '@/utils';
import Modal, { TActionsModal, TDialog } from '@/components/shared/Modal';

export default function AddTodo({ onClick }: { onClick: (todo: string) => void }) {
  const refModalError = useRef<TActionsModal>(null);
  const [enteredTodo, setEnteredTodo] = useState('');
  const handleChangeInputTodo = (e: ChangeEvent<HTMLInputElement>) =>
    setEnteredTodo(e.target.value);
  const handleClickBtnCreateTodo = () => {
    if (!validateIsEmpty(enteredTodo)) {
      handleShowModalError('Error', TEXT_ADD_TODO_BUTTON_ADD, 'error');
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
  function handleShowModalError(title: string, msg: string, type?: TDialog) {
    refModalError.current?.show(title, msg, type);
  }
  return (
    <S.DivContainer>
      <S.InputTodo
        type="text"
        value={enteredTodo}
        onChange={handleChangeInputTodo}
        onKeyDown={handlePressKeyDown}
        placeholder={TEXT_ADD_TODO_INPUT_PLACEHOLDER}
      />
      <S.ButtonAddTodo onClick={handleClickBtnCreateTodo}>
        {TEXT_ADD_TODO_BUTTON_ADD}
      </S.ButtonAddTodo>
      <Modal ref={refModalError} />
    </S.DivContainer>
  );
}
