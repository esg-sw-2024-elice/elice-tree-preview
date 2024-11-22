import * as Styled from 'components/todolist/Todolistbutton_style';

interface TodoListButtonProps {
  content: string;
  onClick: () => void;
}

export default function TodoListButton({ content, onClick }: TodoListButtonProps) {
  return (
    <Styled.Button type="button" content={content} onClick={onClick}>
      {content}
    </Styled.Button>
  );
}
