import { useState, useEffect } from 'react';
import * as S from './Landing.styles';
import landingPic1 from '@/assets/images/bg-landing.png';
import landingPic2 from '@/assets/images/bg-landing2.png';
import landingPic3 from '@/assets/images/bg-landing3.png';
import { TEXT_LANDING_CONTENT, TEXT_LANDING_HEADING1_INTRODUCE } from '@/constants';

const images = [landingPic1, landingPic2, landingPic3];

export default function Landing() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIdx]);

  const handleNext = () => {
    setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prevIdx) => (prevIdx - 1 + images.length) % images.length);
  };

  return (
    <S.DivContainer>
      <S.ArrowButton className="left" onClick={handlePrev}>
        ◀
      </S.ArrowButton>
      <S.ArrowButton className="right" onClick={handleNext}>
        ▶
      </S.ArrowButton>
      <S.PicContainer src={images[currentIdx]} alt="Img for landing page" />
      <S.ContentWrapper>
        <S.Heading1Introduce>{TEXT_LANDING_HEADING1_INTRODUCE}</S.Heading1Introduce>
        <S.Content>{TEXT_LANDING_CONTENT}</S.Content>
      </S.ContentWrapper>
    </S.DivContainer>
  );
}
