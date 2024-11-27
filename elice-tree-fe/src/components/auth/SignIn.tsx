import * as S from './SignIn.styles';
import { useRef } from 'react';
import Input from './shared/Input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import { KEYS_ROUTE, MSG_SUCCESS_TO_SIGNIN } from '@/constants';
import imgLogoElice from '@/assets/images/logo-elice.png';

export default function SignIn() {
  const refUserId = useRef<HTMLInputElement>(null);
  const refUserPassword = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const handleClickBtnSignIn = () => {
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
    if (!signIn(enteredUserId, enteredUserPassword)) {
      return;
    }
    alert(MSG_SUCCESS_TO_SIGNIN(enteredUserId));
    navigate(KEYS_ROUTE.LANDING());
  };
  const handleClickBtnGoToSignUp = () => {
    navigate(KEYS_ROUTE.SIGNUP());
  };
  const handleClickBtnGoToLanding = () => {
    navigate(KEYS_ROUTE.LANDING());
  };
  return (
    <S.DivContainer>
      <S.DivContainerSignInForm>
        <S.ImageLogoElice src={imgLogoElice} alt="The logo image of elice" />
        <S.DivWrapperInput>
          <Input ref={refUserId} type="text" placeholder="ID" onPressEnter={handleClickBtnSignIn} />
          <Input
            ref={refUserPassword}
            type="password"
            placeholder="****"
            onPressEnter={handleClickBtnSignIn}
          />
        </S.DivWrapperInput>
      </S.DivContainerSignInForm>
      <S.Heading1Title>
        로그인 후<br />
        탄소배출감소에 동참하세요!
      </S.Heading1Title>
      <S.ParagraphDescription>
        로그인 후 무료로 체험하실 수 있어요.
        <br />
        멋진 환경 지킴이가 되어 보세요!
      </S.ParagraphDescription>
      <S.ButtonSignIn onClick={handleClickBtnSignIn}>로그인</S.ButtonSignIn>
      <S.ButtonGoToSignUp onClick={handleClickBtnGoToSignUp}>
        아직 회원이 아니신가요?
      </S.ButtonGoToSignUp>
      <S.ButtonGoToLanding onClick={handleClickBtnGoToLanding}>서비스 둘러보기</S.ButtonGoToLanding>
    </S.DivContainer>
  );
}
