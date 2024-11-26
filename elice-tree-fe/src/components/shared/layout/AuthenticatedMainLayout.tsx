import * as S from './AuthenticatedMainLayout.styles';

import { Outlet } from 'react-router-dom';
import Header from '@/components/shared/Header';

export default function AuthenticatedMainLayout() {
  return (
    <>
      <Header />
      <S.MainContainer className="">
        <Outlet />
      </S.MainContainer>
    </>
  );
}
