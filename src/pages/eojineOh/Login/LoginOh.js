import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './LoginOh.scss';

function Login() {
  // 로그인 버튼 누르면 /main-oh 페이지로 이동.
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-oh');
  };

  // Mission 1 : ID와 Pwd input의 값에 변화가 생기면 그 값이 state로 저장.
  const [inputId, setIdInput] = useState('');
  const [inputPwd, setPwdInput] = useState('');

  const handleIdInput = e => {
    setIdInput(e.target.value);
  };
  const handlePwdInput = e => {
    setPwdInput(e.target.value);
  };

  const isValid = inputId.includes('@') && inputPwd.length >= 5;

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="logoWrapper">
          <div className="logo">Westagram</div>
        </div>
        <div className="input">
          <input
            className="inputId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={inputId}
            onChange={handleIdInput}
          />
          <input
            className="inputPwd"
            type="password"
            placeholder="비밀번호"
            value={inputPwd}
            onChange={handlePwdInput}
          />
          <button
            className="loginBtn"
            onClick={goToMain}
            disabled={isValid ? false : true}
          >
            로그인
          </button>
        </div>
        <footer className="forgotPwd">
          <a href="/login-oh">비밀번호를 잊으셨나요?</a>
        </footer>
      </div>
    </div>
  );
}

export default Login;
