import * as S from './Todos.styles';
import { useMemo } from 'react';
import TodoElement from './Todo';
// import AddTodo from './AddTodo';
import { useAuth } from '@/hooks/use-auth';
import { useTodo } from '@/hooks/use-todo';
import {
  TEXT_TODOS_FOOTER_SUMMARY,
  TEXT_TODOS_FOOTER_SUMMARY_EMPTY,
  TEXT_TODOS_TITLE_PARAGRAPH,
  TEXT_TODOS_DIV_TOTAL,
} from '@/constants';
import { validateIsEmpty } from '@/utils';

export default function Todos() {
  const { isAuthenticated, userId } = useAuth();
  const { todos, toggleTodo } = useTodo();
  const lengthTodos = useMemo(() => todos.length, [todos]);
  const totalCarbon = useMemo(() => {
    return todos
      .filter((todo) => todo.isCompleted) // isCompleted가 true인 항목 필터링
      .reduce((total, todo) => total + (todo.carbon || 0), 0)
      .toFixed(2);
  }, [todos]);

  const totalTree = useMemo(() => {
    return todos
      .filter((todo) => todo.isCompleted) // isCompleted가 true인 항목 필터링
      .reduce((total, todo) => total + (todo.tree || 0), 0)
      .toFixed(2);
  }, [todos]);

  const summaryFooter =
    isAuthenticated && validateIsEmpty(userId) ? (
      Boolean(lengthTodos) ? (
        <>{TEXT_TODOS_FOOTER_SUMMARY(userId, Number(totalTree))}</>
      ) : (
        <>{TEXT_TODOS_FOOTER_SUMMARY_EMPTY}</>
      )
    ) : (
      <></>
    );
  return (
    <S.DivContainer>
      <S.DivWrapperList>
        <S.IconList />
        <S.ParagraphTitle>{TEXT_TODOS_TITLE_PARAGRAPH}</S.ParagraphTitle>
        <S.ContentsWrapper>
          <S.UnorderedListContainer>
            {todos.map((todo) => (
              <TodoElement key={todo.id} todo={todo} onToggle={toggleTodo} />
            ))}
          </S.UnorderedListContainer>
          <S.DivTotal>{TEXT_TODOS_DIV_TOTAL(Number(totalCarbon))}</S.DivTotal>
        </S.ContentsWrapper>
        {/* <AddTodo onClick={addTodo} /> */}
      </S.DivWrapperList>
      <S.Heading1Summary>{summaryFooter}</S.Heading1Summary>
    </S.DivContainer>
  );
}
