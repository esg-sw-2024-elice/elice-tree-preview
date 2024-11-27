import * as S from './Todos.styles';
import { useMemo } from 'react';
import TodoElement from './Todo';
import AddTodo from './AddTodo';
import { useAuth } from '@/hooks/use-auth';
import { useTodo } from '@/hooks/use-todo';

export default function Todos() {
  const { isAuthenticated, userId } = useAuth();
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();
  const lengthTodos = useMemo(() => todos.length, [todos]);
  const lengthTodosCompleted = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos],
  );
  const summaryFooter =
    isAuthenticated && Boolean(userId?.trim().length) ? (
      Boolean(lengthTodos) ? (
        <>
          {`${userId} 님은 ${lengthTodosCompleted} kg 의 탄소를 절약하셨습니다.`}
          <br />
          {`${lengthTodos} 그루의 나무를 심으셨어요!`}
        </>
      ) : (
        <>할 일 나무를 심고 탄소를 절약해보세요!</>
      )
    ) : (
      <></>
    );
  return (
    <S.DivContainer>
      <S.DivWrapperList>
        <S.IconList />
        <S.ParagraphTitle>탄소배출감소 동참하기</S.ParagraphTitle>
        <S.UnorderedListContainer>
          {todos.map((todo) => (
            <TodoElement key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
          ))}
        </S.UnorderedListContainer>
        <S.DivTotal>{`총 ${lengthTodosCompleted} kg 의 탄소`}</S.DivTotal>
        <AddTodo onClick={addTodo} />
      </S.DivWrapperList>
      <S.Heading1Summary>{summaryFooter}</S.Heading1Summary>
    </S.DivContainer>
  );
}
