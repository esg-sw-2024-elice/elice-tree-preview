import styled from 'styled-components';
import { PALETTE } from '@/styles';
import { ReactComponent as _IconList } from '@/assets/icons/icon-mono-list.svg';

export const DivContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 52px;
  margin-left: 640px;
  margin-right: 640px;
`;

export const DivWrapperList = styled.div`
  position: relative;
  width: 100%;
  min-height: 600px;
  border-radius: 30px;
  padding-top: 36px;
  padding-left: 64px;
  padding-right: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: ${PALETTE.WHITE};
  box-shadow: 5px 5px 5px 10px rgba(0, 0, 0, 0.05);
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
  position: absolute;
  bottom: 10%;
  width: 80%;
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
