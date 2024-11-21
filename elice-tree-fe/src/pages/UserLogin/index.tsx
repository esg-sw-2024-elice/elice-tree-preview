import React, { useState } from 'react';
import LoginButton from 'components/userlogin/Loginbutton';
import Idinput from 'components/userlogin/Idinput';
import PwInput from 'components/userlogin/Pwinput';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    if (id && pw) {
      alert(`${id}님 오늘도 탄소배출을 줄여봐요`);
      navigate('/TodoList');
    } else {
      alert('ID와 비밀번호를 입력하세요');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>로그인 페이지</h1>
      <Idinput id={id} setId={setId} />
      <PwInput pw={pw} setPw={setPw} />
      <LoginButton label="로그인" onClick={handleLogin} />
    </div>
  );
}
