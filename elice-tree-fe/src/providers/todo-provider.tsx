import { API_URL } from '@/configs';
import { createContext, PropsWithChildren, useLayoutEffect, useState } from 'react';
import { ITodo } from '@/interfaces';
import { useFetch } from '@/hooks/use-fetch';

const URL_API_TODOS = `${API_URL}/list.json`;

export const CtxTodo = createContext<{
  todos: ITodo[];
  // addTodo: (content: string) => void;
  toggleTodo: (index: number) => void;
}>({
  todos: [],
  // addTodo: () => {},
  toggleTodo: () => {},
});

export default function TodoProvider({ children }: PropsWithChildren) {
  const { isFetching, data: fetchedTodos, error } = useFetch<ITodo[]>(URL_API_TODOS);
  const [todos, setTodos] = useState<ITodo[]>([]);
  useLayoutEffect(() => {
    if (!isFetching && !error) {
      setTodos(fetchedTodos || []);
    }
  }, [isFetching, fetchedTodos, error]);
  const toggleTodo = (index: number) =>
    setTodos((p) =>
      p.map((todo) => {
        if (todo.id === index) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      }),
    );
  return (
    <CtxTodo.Provider
      value={{
        todos,
        // addTodo,
        toggleTodo,
      }}
    >
      {children}
    </CtxTodo.Provider>
  );
}
