import * as S from './LoginButton.styles';

interface LoginButtonProps {
  label: string;
  onLogin: () => void;
}

export default function LoginButton({ label, onLogin }: LoginButtonProps) {
  const handleClickBtnLogin = onLogin;
  return (
    <S.LoginButton label={label} onClick={handleClickBtnLogin}>
      로그인
    </S.LoginButton>
  );
}
