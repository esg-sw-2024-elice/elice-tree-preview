import { KEYS_ROUTE } from '@/constants';
import * as S from './Header.styles';

import imgLogo from '@/assets/images/logo-elice.png';
import { useAuth } from '@/hooks/use-auth';
import { useNavigate } from 'react-router-dom';

const menusNavigation = [
  {
    protected: false,
    text: '서비스 소개',
    to: KEYS_ROUTE.LANDING(),
  },
  {
    protected: true,
    text: '나무 심기',
    to: KEYS_ROUTE.TODOS(),
  },
  {
    protected: true,
    text: '환경 살리기',
    to: 'https://www.elice.io',
  },
];

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, signOut } = useAuth();
  const handleClickBtnSignIn = () => {
    navigate(KEYS_ROUTE.SIGNIN());
  };
  const handleClickBtnSignOut = signOut;
  const handleClickBtnGoToExternal = (to: string) => window.open(to);
  const contentMenus = menusNavigation.map((menu, idx) => {
    if (menu.protected && !isAuthenticated) {
      return null;
    }
    if (['http', 'https'].some((p) => menu.to.startsWith(p))) {
      return (
        <S.LinkGoToExternal
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClickBtnGoToExternal(menu.to)}
        >
          {menu.text}
        </S.LinkGoToExternal>
      );
    }
    return (
      <S.LinkNavItem key={idx} to={menu.to}>
        {menu.text}
      </S.LinkNavItem>
    );
  });
  return (
    <S.HeaderContainer>
      <S.ImageLogo src={imgLogo} />
      <S.NavigationMenus>{contentMenus}</S.NavigationMenus>
      {isAuthenticated ? (
        <S.ButtonAuth onClick={handleClickBtnSignOut}>로그아웃</S.ButtonAuth>
      ) : (
        <S.ButtonAuth onClick={handleClickBtnSignIn}>로그인</S.ButtonAuth>
      )}
    </S.HeaderContainer>
  );
}
