import { useLayoutEffect, useState } from 'react';
import { useFetch } from '@/hooks/use-fetch';
import { Todo } from '@/interfaces';
import { TodoElement, TodoListInput } from '@/components';
import TodosLayout from '@/components/todo/layout/TodosLayout';

const URL_API_TODOS = '/api/list.json';

export default function TodosPage() {
  const { isFetching, data: fetchedTodos, error } = useFetch<Todo[]>(URL_API_TODOS);
  const [todos, setTodos] = useState<Todo[]>([]);
  useLayoutEffect(() => {
    if (!isFetching && !error) {
      setTodos(fetchedTodos || []);
    }
  }, [isFetching, fetchedTodos, error]);

  // todo create
  function handleAddTodo(content: string) {
    if (!content) {
      return;
    }
    setTodos((p) => [
      ...p,
      {
        id: p[p.length - 1].id + 1,
        content,
        completed: false,
      },
    ]);
  }

  // todo toggle
  const handleToggleTodo = (index: number) => {
    setTodos((p) =>
      p.map((todo) => {
        if (todo.id === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  };

  // todo delete
  const handleDeleteTodo = (index: number) => {
    setTodos((p) => p.filter((todo) => todo.id !== index));
  };

  return (
    <>
      <TodosLayout>
        {todos.map((todo) => (
          <TodoElement
            key={todo.id}
            todo={todo}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </TodosLayout>
      <TodoListInput handleAddTodo={handleAddTodo} />
    </>
  );
}
