import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginButton from '@/components/auth/LoginButton';
import IdInput from '@/components/auth/IdInput';
import PwInput from '@/components/auth/PwInput';
import { KEYS_ROUTE } from '@/providers/router-provider';
import { useAuth } from '@/hooks/use-auth';

export default function AuthPage() {
  const [enteredId, setEnteredId] = useState('');
  const [enteredPw, setEnteredPw] = useState('');
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const handleLogin = () => {
    if (enteredId.trim() === '') {
      alert('ID를 입력하세요');
      return;
    }
    if (enteredPw.trim() === '') {
      alert('비밀번호를 입력하세요');
      return;
    }
    signIn();
    alert(`${enteredId}님 오늘도 탄소배출을 줄여봐요!`);
    navigate(KEYS_ROUTE.TODOS());
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>로그인 페이지</h1>
      <IdInput id={enteredId} setId={setEnteredId} />
      <PwInput pw={enteredPw} setPw={setEnteredPw} />
      <LoginButton label="로그인" onLogin={handleLogin} />
    </div>
  );
}
