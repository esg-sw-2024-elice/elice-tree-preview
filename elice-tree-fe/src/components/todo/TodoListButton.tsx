import * as S from './TodoListButton.styles';

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
