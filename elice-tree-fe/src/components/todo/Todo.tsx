import * as S from './Todo.styles';
import { ITodo } from '@/interfaces';

export default function Todo({
  todo,
  onToggle,
  onDelete,
}: {
  todo: ITodo;
  onToggle: (index: number) => void;
  onDelete: (index: number) => void;
}) {
  const { id, content, completed } = todo;
  const handleClickBtnComplete = onToggle;
  const handleClickBtnDelete = onDelete;
  return (
    <S.ListContainer>
      <S.ButtonToggle onClick={() => handleClickBtnComplete(id)}>
        <S.SpanToggle>{completed ? '✔' : ''}</S.SpanToggle>
      </S.ButtonToggle>
      <S.ParagraphTodoContent isCompleted={completed}>
        <span>{content}</span>
      </S.ParagraphTodoContent>
      <S.ButtonDelete onClick={() => handleClickBtnDelete(id)}>삭제</S.ButtonDelete>
    </S.ListContainer>
  );
}
