import React from 'react';
import './LoginKim.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginKim() {
  const [form, setForm] = useState({ id: '', password: '' });
  const { id, password } = form;

  const handleInput = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const navigate = useNavigate();

  function onBtnClick() {
    navigate('/main-kim');
    alert(`로그인 되었습니다.\n${id}님 좋은 하루되세요 :)`);
  }
  function onKeyup(e) {
    e.key === 'Enter' && onBtnClick();
  }

  return (
    <section className="login-page">
      <div className="Wrapper">
        <h1 className="logo">Westagram</h1>
        <div className="contant">
          <form className="form">
            <label>
              <input
                className="input id"
                type="text"
                name="id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleInput}
                onKeyUp={onKeyup}
                autoComplete="username"
              />
            </label>
            <label>
              <input
                className="input"
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호"
                onKeyUp={onKeyup}
                onChange={handleInput}
                autoComplete="current-password"
              />
            </label>
          </form>
          <button
            className={`loginBtn ${
              id.includes('@') && password.length >= 5
                ? ''
                : 'loginBtn--disable'
            }`}
            onClick={onBtnClick}
            style={{ disabled: !id || !password }}
          >
            로그인
          </button>
        </div>
        <button className="forgotPassword">비밀번호를 잊으셨나요?</button>
      </div>
    </section>
  );
}

export default LoginKim;
