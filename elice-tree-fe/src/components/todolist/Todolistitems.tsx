import React from 'react';
import { Todo } from 'types';
import TodoListButton from './Todolistbutton';

interface TodoListItemsProps {
  todos: Todo[];
  CompletedTodo: (index: number) => void;
}

export default function TodoListItems({ todos, CompletedTodo }: TodoListItemsProps) {
  return (
    <>
      {todos.map((todo, index) => {
        return (
          <ul key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <li>
              <span>#{index + 1} </span>
              <span>{todo.content} </span>
              <TodoListButton content="완료" onClick={() => CompletedTodo(index)} />
            </li>
          </ul>
        );
      })}
    </>
  );
}
