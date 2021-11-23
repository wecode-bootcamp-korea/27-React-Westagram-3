import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './Login.scss';

function LoginLee() {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  function handleIdInput(e) {
    setIdInput(e.target.value);
  }

  function handlePwInput(e) {
    setPwInput(e.target.value);
  }

  const isValid = idInput.includes('@') && pwInput.length > 5;

  const navigate = useNavigate();

  function onClickBtn() {
    if (isValid) {
      navigate('/main-lee');
    }
  }

  return (
    <div className="login_background">
      <div className="container">
        <div className="login-container">
          <h1 className="instagram">instagram</h1>
          <form className="login-form">
            <input
              value={idInput}
              onChange={handleIdInput}
              type="text"
              id="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              value={pwInput}
              onChange={handlePwInput}
              type="password"
              id="password"
              placeholder="비밀번호"
            />
            <button
              onClick={onClickBtn}
              className={'login-btn ' + (isValid ? 'activeBtn' : 'unActiveBtn')}
            >
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
