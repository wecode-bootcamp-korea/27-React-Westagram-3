import React from 'react';
import { useNavigate } from 'react-router';
import './LoginOh.scss';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-oh');
  };

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
          />
          <input className="inputPwd" type="password" placeholder="비밀번호" />
          <button className="loginBtn" onClick={goToMain}>
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
