import React from 'react';
import * as Styled from 'components/todolist/todolistbutton/Todolistbutton_style';

interface TodoListButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function TodoListButton({ children, onClick }: TodoListButtonProps) {
  return (
    <>
      <Styled.TodolistButtonWrapper type="button" content="completed" onClick={onClick}>
        {children}
      </Styled.TodolistButtonWrapper>
    </>
  );
}
