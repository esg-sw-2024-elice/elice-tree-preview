import styled from 'styled-components';
import imgBgMainGradient from '@/assets/images/bg-main-gradient.png';

export const DivContainer = styled.div<{ withHeader?: boolean }>`
  flex: 1;
  padding-top: ${({ withHeader }) => (withHeader ? '80px' : '')};
  display: flex;
  flex-direction: column;
  background-image: url(${imgBgMainGradient});
  background-size: cover;
  background-position: left 15vw bottom 55%;
  background-repeat: no-repeat;
`;

export const MainContainer = styled.main<{ withHeader?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: ${({ withHeader }) => (withHeader ? 'flex-start' : 'center')};
`;
