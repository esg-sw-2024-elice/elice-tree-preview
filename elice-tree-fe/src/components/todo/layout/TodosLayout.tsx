import * as S from './TodosLayout.styles';

export default function TodosLayout({ children }: React.PropsWithChildren) {
  return <S.UnorderedListContainer>{children}</S.UnorderedListContainer>;
}
