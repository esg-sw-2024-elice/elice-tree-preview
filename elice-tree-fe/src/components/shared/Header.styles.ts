import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PALETTE } from '@/styles';
import BaseButton from './BaseButton';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0px 52px 0px 24px;
  border-bottom: 1px solid ${PALETTE.GAINSBORO};
  background-color: ${PALETTE.WHITE};
`;

export const ImageLogo = styled.img`
  cursor: pointer;
  width: 133px;
  margin-left: 44px;
`;

export const NavigationMenus = styled.nav`
  width: 100%;
  margin-left: 100px;
  display: flex;
  align-items: center;
  column-gap: 100px;
`;

export const LinkNavItem = styled(Link)`
  color: ${PALETTE.BLACK_PERL};
  font-weight: 700;
`;

export const LinkGoToExternal = styled.a`
  color: ${PALETTE.BLACK_PERL};
  font-weight: 700;
`;

export const ButtonAuth = styled(BaseButton)`
  width: 109px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  margin-right: 0px;
  background-color: ${PALETTE.MAIN_PURPLE};
  color: ${PALETTE.WHITE};
  border: none;
  border-radius: 10px;
  font-size: 16px;
`;
