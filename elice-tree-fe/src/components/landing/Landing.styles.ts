import styled from 'styled-components';

export const DivContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Heading1Introduce = styled.h1`
  margin-bottom: 40px;
  font-size: 54px;
  font-weight: 700;
  color: #333;
`;

export const Content = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: #333;
  word-break: keep-all;
  max-width: 800px;
  text-align: left;
  line-height: 42px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  transform: translateX(20vw);
  text-align: center;
`;

export const PicContainer = styled.img`
  background-repeat: no repeat;
  transform: translateX(10vw);
  border-radius: 40px;
  max-width: 500px;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &.left {
    left: 100px;
  }

  &.right {
    left: 720px;
  }
`;
