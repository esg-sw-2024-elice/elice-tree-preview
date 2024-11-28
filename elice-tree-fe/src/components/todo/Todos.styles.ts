import styled from 'styled-components';
import { breakpoints, PALETTE } from '@/styles';
import { ReactComponent as _IconList } from '@/assets/icons/icon-mono-list.svg';

export const DivContainer = styled.div`
  margin: 52px 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.sm} {
    margin-left: 64px;
    margin-right: 64px;
  }

  ${breakpoints.md} {
    margin-left: 128px;
    margin-right: 128px;
  }

  ${breakpoints.lg} {
    margin-left: 640px;
    margin-right: 640px;
  }
`;

export const DivWrapperList = styled.div`
  width: 100%;
  min-height: 600px;
  padding-top: 36px;
  padding-left: 64px;
  padding-right: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: ${PALETTE.WHITE};
  box-shadow: 7px 5px 5px 10px rgba(0, 0, 0, 0.08);
`;

export const IconList = styled(_IconList)`
  width: 45px;
  height: 47px;
`;

export const ParagraphTitle = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${PALETTE.PIGMENT_GREEN};
`;

export const UnorderedListContainer = styled.ul`
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${PALETTE.SOLITUDE};
  background-color: ${PALETTE.ALICE_BLUE};
`;

export const DivTotal = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PALETTE.MAIN_PURPLE};
  color: ${PALETTE.WHITE};
  border-radius: 4px;
  font-size: 20px;
`;

export const Heading1Summary = styled.h1`
  margin-top: 52px;
  color: ${PALETTE.BLACK};
  font-size: 36px;
  text-align: center;
`;
