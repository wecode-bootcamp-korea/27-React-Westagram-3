import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginLee() {
  const navigate = useNavigate(); // 반환된 함수를 담는다.

  const goToMain = () => {
    navigate('/main');
  };

  return (
    <div className="login_background">
      <div className="container">
        <div className="login-container">
          <h1 className="instagram">Instagram</h1>

          <form className="login-form">
            <input
              type="text"
              id="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input type="password" id="password" placeholder="비밀번호" />
            <button className="login-btn" onClick={goToMain}>
              로그인
            </button>
          </form>

          <p className="password_forget">비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    </div>
  );
}

export default LoginLee;
