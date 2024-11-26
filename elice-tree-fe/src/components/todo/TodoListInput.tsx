import { TodoListButton } from '@/components';
import { useState } from 'react';

interface TodoInputProps {
  handleAddTodo: (todo: string) => void;
}

export default function TodoListInput({ handleAddTodo }: TodoInputProps) {
  const [enteredTodo, setEnteredTodo] = useState('');
  const handleChangeInputTodo = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEnteredTodo(e.target.value);
  const handleClickBtnCreateTodo = () => handleAddTodo(enteredTodo);
  return (
    <>
      <p>제목</p>
      <input type="text" value={enteredTodo} onChange={handleChangeInputTodo} />
      <TodoListButton content="만들기" onClick={handleClickBtnCreateTodo}>
        만들기
      </TodoListButton>
    </>
  );
}
