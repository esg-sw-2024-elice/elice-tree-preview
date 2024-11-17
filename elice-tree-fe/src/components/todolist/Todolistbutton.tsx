import * as Styled from 'styles/components/todolist/Todolistbutton'

interface TodoListButtonProps {
  content: string;
  onClick: () => void;
}

export default function TodoListButton({ content, onClick }: TodoListButtonProps) {
  return (
    <Styled.Button content={content} onClick={onClick}>
      {content}
    </Styled.Button>
  );
}
