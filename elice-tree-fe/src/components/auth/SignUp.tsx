import * as S from './SignUp.styles';
import { useRef } from 'react';
import Input from './shared/Input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import { KEYS_ROUTE, MSG_SUCCESS_TO_SIGNUP } from '@/constants';
import imgLogoElice from '@/assets/images/logo-elice.png';

export default function SignUp() {
  const refUserId = useRef<HTMLInputElement>(null);
  const refUserPassword = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const handleClickBtnSignUp = () => {
    const enteredUserId = refUserId.current?.value;
    const enteredUserPassword = refUserPassword.current?.value;
    if (!enteredUserId || enteredUserId.trim() === '') {
      alert('ID를 입력하세요');
      return;
    }
    if (!enteredUserPassword || enteredUserPassword.trim() === '') {
      alert('비밀번호를 입력하세요');
      return;
    }
    if (!signUp(enteredUserId, enteredUserPassword)) {
      return;
    }
    alert(MSG_SUCCESS_TO_SIGNUP);
    navigate(KEYS_ROUTE.SIGNIN());
  };
  const handleClickBtnGoToSignIn = () => navigate(KEYS_ROUTE.SIGNIN());
  return (
    <S.DivContainer>
      <S.DivContainerSignUpForm>
        <S.ImageLogoElice src={imgLogoElice} alt="The logo image of elice" />
        <S.DivWrapperInput>
          <Input ref={refUserId} type="text" placeholder="ID" onPressEnter={handleClickBtnSignUp} />
          <Input
            ref={refUserPassword}
            type="password"
            placeholder="****"
            onPressEnter={handleClickBtnSignUp}
          />
        </S.DivWrapperInput>
      </S.DivContainerSignUpForm>
      <S.Heading1Title>
        회원가입 후<br />
        탄소배출감소에 동참하세요!
      </S.Heading1Title>
      <S.ParagraphDescription>
        로그인 후 무료로 체험하실 수 있어요.
        <br />
        멋진 환경 지킴이가 되어 보세요!
      </S.ParagraphDescription>
      <S.ButtonSignUp onClick={handleClickBtnSignUp}>회원가입</S.ButtonSignUp>
      <S.ButtonGoToSignIn onClick={handleClickBtnGoToSignIn}>이미 회원이신가요?</S.ButtonGoToSignIn>
    </S.DivContainer>
  );
}
