import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginWon.scss';

function LoginWon() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-won');
  };

  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleIdInput = event => {
    setInputId(event.target.value);
  };

  const handlePwInput = event => {
    setInputPw(event.target.value);
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
              value={inputId}
              onChange={handleIdInput}
            />

            <input
              type="text"
              placeholder="비밀번호"
              id="inputPw"
              value={inputPw}
              onChange={handlePwInput}
            />

            <div>
              {inputId.includes('@') && inputPw.length >= 5 ? (
                <button className="button" onClick={goToMain} disabled={false}>
                  로그인
                </button>
              ) : (
                <button className="button" onClick={goToMain} disabled={true}>
                  로그인
                </button>
              )}
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

export default LoginWon;
