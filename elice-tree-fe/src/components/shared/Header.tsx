import { KEYS_ROUTE } from '@/providers/router-provider';
import * as S from './Header.styles';

import imgLogo from '@/assets/images/logo-elice.png';

export default function Header() {
  const menusNavigation = [
    {
      text: '서비스 소개',
      to: KEYS_ROUTE.LANDING(),
    },
    {
      text: '환경 살리기',
      to: KEYS_ROUTE.TODOS(),
    },
  ];
  return (
    <S.HeaderContainer>
      <S.ImageLogo src={imgLogo} />
      <S.NavigationMenus>
        {menusNavigation.map((menu, idx) => (
          <S.LinkNavItem key={idx} to={menu.to}>
            {menu.text}
          </S.LinkNavItem>
        ))}
      </S.NavigationMenus>
      <S.ButtonLogout>로그아웃</S.ButtonLogout>
    </S.HeaderContainer>
  );
}
