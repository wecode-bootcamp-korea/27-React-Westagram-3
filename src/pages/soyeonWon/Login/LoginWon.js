import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginWon.scss';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-won');
  };

  return (
    <div className="login">
      <article className="article">
        <div className="container">
          <header className="header">
            <div className="logo">westagram</div>
          </header>

          <div className="inputBtn">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              id="inputId"
            />
            <input type="text" placeholder="비밀번호" id="inputPw" />

            <div>
              <button className="button" onClick={goToMain}>
                로그인
              </button>
            </div>
          </div>

          <footer className="footer">
            <a href="/">비밀번호를 잊으셨나요?</a>
          </footer>
        </div>
      </article>
    </div>
  );
}

export default Login;
