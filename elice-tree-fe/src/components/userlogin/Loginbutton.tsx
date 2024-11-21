import * as Styled from 'styles/components/userlogin/Loginbutton';

interface LoginButtonProps {
  label: string;
  onClick: () => void;
}

export default function LoginButton({ label, onClick }: LoginButtonProps) {
  return (
    <Styled.LoginButton label={label} onClick={onClick}>
      로그인
    </Styled.LoginButton>
  );
}
