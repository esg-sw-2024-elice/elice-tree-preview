import * as S from './SignIn.styles';
import { useRef } from 'react';
import Input from './shared/Input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import {
  KEYS_ROUTE,
  MSG_ERROR_VALIDATION_USER_ID,
  MSG_ERROR_VALIDATION_USER_PASSWORD,
  MSG_SUCCESS_TO_SIGNIN,
  TEXT_SIGNIN_BUTTON_GO_TO_LANDING,
  TEXT_SIGNIN_BUTTON_GO_TO_SIGNUP,
  TEXT_SIGNIN_BUTTON_SIGNIN,
  TEXT_SIGNIN_PARAGRAPH_DESCRIPTION,
  TEXT_SIGNIN_HEADING1_TITLE,
  TEXT_SIGNIN_IMAGE_LOGO_ELICE_ALTERNATIVE,
  TEXT_SIGNIN_INPUT_PASSWORD_PLACEHOLDER,
  TEXT_SIGNIN_INPUT_USER_ID_PLACEHOLDER,
  MSG_ERROR_FAIL_TO_SIGNIN,
} from '@/constants';
import imgLogoElice from '@/assets/images/logo-elice.png';
import Modal, { TActionsModal, TDialog } from '@/components/shared/Modal';
import { validateIsEmpty } from '@/utils';

export default function SignIn() {
  const refModalSuccess = useRef<TActionsModal>(null);
  const refModalError = useRef<TActionsModal>(null);
  const refUserId = useRef<HTMLInputElement>(null);
  const refUserPassword = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { signIn } = useAuth();
  function handleShowModalSuccess(title: string, msg: string, type?: TDialog) {
    refModalSuccess.current?.show(title, msg, type);
  }
  function handleShowModalError(title: string, msg: string, type?: TDialog) {
    refModalError.current?.show(title, msg, type);
  }
  const handleClickBtnSignIn = () => {
    const enteredUserId = refUserId.current?.value;
    const enteredUserPassword = refUserPassword.current?.value;
    if (!validateIsEmpty(enteredUserId)) {
      handleShowModalError('Error', MSG_ERROR_VALIDATION_USER_ID, 'error');
      return;
    }
    if (!validateIsEmpty(enteredUserPassword)) {
      handleShowModalError('Error', MSG_ERROR_VALIDATION_USER_PASSWORD, 'error');
      return;
    }
    if (!signIn(enteredUserId!, enteredUserPassword!)) {
      handleShowModalError('Error', MSG_ERROR_FAIL_TO_SIGNIN, 'error');
      return;
    }
    handleShowModalSuccess('Success', MSG_SUCCESS_TO_SIGNIN(enteredUserId!));
  };
  const handleSuccessToSignIn = async () => {
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
        <S.ImageLogoElice src={imgLogoElice} alt={TEXT_SIGNIN_IMAGE_LOGO_ELICE_ALTERNATIVE} />
        <S.DivWrapperInput>
          <Input ref={refUserId} type="text" placeholder={TEXT_SIGNIN_INPUT_USER_ID_PLACEHOLDER} />
          <Input
            ref={refUserPassword}
            type="password"
            placeholder={TEXT_SIGNIN_INPUT_PASSWORD_PLACEHOLDER}
          />
        </S.DivWrapperInput>
      </S.DivContainerSignInForm>
      <S.Heading1Title>{TEXT_SIGNIN_HEADING1_TITLE}</S.Heading1Title>
      <S.ParagraphDescription>{TEXT_SIGNIN_PARAGRAPH_DESCRIPTION}</S.ParagraphDescription>
      <S.ButtonSignIn onClick={handleClickBtnSignIn}>{TEXT_SIGNIN_BUTTON_SIGNIN}</S.ButtonSignIn>
      <S.ButtonGoToSignUp onClick={handleClickBtnGoToSignUp}>
        {TEXT_SIGNIN_BUTTON_GO_TO_SIGNUP}
      </S.ButtonGoToSignUp>
      <S.ButtonGoToLanding onClick={handleClickBtnGoToLanding}>
        {TEXT_SIGNIN_BUTTON_GO_TO_LANDING}
      </S.ButtonGoToLanding>
      <Modal ref={refModalSuccess} onConfirm={handleSuccessToSignIn} />
      <Modal ref={refModalError} />
    </S.DivContainer>
  );
}
