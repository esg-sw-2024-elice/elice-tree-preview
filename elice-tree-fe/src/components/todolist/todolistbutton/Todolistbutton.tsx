import React from 'react';
import * as S from './Todolistbutton_style';

interface TodoListButtonProps {
  children: React.ReactNode;
  content: string;
  onClick: () => void;
}

export default function TodoListButton({ children, content, onClick }: TodoListButtonProps) {
  return (
    <>
      <S.TodolistButtonWrapper type="button" onClick={onClick}>
        {children}
      </S.TodolistButtonWrapper>
    </>
  );
}
