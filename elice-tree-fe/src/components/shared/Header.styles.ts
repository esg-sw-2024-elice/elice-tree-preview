import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { PALETTE } from '../../styles';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${PALETTE.GRAY};
`;

export const ImageLogo = styled.img`
  width: 100px;
`;

export const NavigationMenus = styled.nav`
  display: flex;
  align-items: center;
`;

export const LinkNavItem = styled(Link)`
  text-decoration: none;
  color: ${PALETTE.BLACK};
`;

export const ButtonLogout = styled.button``;
