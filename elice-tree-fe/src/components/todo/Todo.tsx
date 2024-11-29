import * as S from './Todo.styles';
import { ITodo } from '@/interfaces';

export default function Todo({
  todo,
  onToggle,
}: {
  todo: ITodo;
  onToggle: (index: number) => void;
}) {
  const { id, content, isCompleted } = todo;
  const handleClickBtnComplete = onToggle;
  return (
    <S.ListContainer>
      <S.ParagraphTodoContent isCompleted={isCompleted}>{content}</S.ParagraphTodoContent>
      <S.ButtonToggle onClick={() => handleClickBtnComplete(id)}>
        <S.SpanToggle>{isCompleted ? '✔' : ''}</S.SpanToggle>
      </S.ButtonToggle>
    </S.ListContainer>
  );
}
