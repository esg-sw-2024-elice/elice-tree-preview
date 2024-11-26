import * as S from './TodoElement.styles';
import { Todo } from '@/interfaces';
import TodoListButton from './TodoListButton';

export default function TodoElement({
  todo,
  onToggle,
  onDelete,
}: {
  todo: Todo;
  onToggle: (index: number) => void;
  onDelete: (index: number) => void;
}) {
  const { id, content, completed } = todo;
  const handleClickBtnComplete = onToggle;
  const handleClickBtnDelete = onDelete;
  return (
    <S.ListContainer>
      <S.DivTodoContent isCompleted={completed}>
        <span>#{id}</span>
        <span>{content}</span>
      </S.DivTodoContent>
      <TodoListButton content="completed" onClick={() => handleClickBtnComplete(id)}>
        {completed ? '완료하기' : '미완료'}
      </TodoListButton>
      <TodoListButton content="deleted" onClick={() => handleClickBtnDelete(id)}>
        삭제
      </TodoListButton>
    </S.ListContainer>
  );
}
