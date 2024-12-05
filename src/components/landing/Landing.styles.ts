import styled from 'styled-components';

export const DivContainer = styled.div`
  margin: 0;
  width: 80%;
  height: 65vh;
  display: flex;
  padding: 20px;
  gap: 5rem;
`;

export const Heading1Introduce = styled.h1`
  width: 100%;
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
  text-align: left;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
`;

export const PicContainer = styled.img`
  background-repeat: no repeat;
  object-fit: cover;
  border-radius: 40px;
  min-width: 500px;
  max-width: 500px;
`;
