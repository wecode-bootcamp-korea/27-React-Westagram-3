import React from 'react';
import './LoginKim.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginKim() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { email, password } = form;
  const navigate = useNavigate();

  const formInputChanged = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = () => {
    alert(`로그인 되었습니다.\n${email}님 좋은 하루되세요 :)`);
    navigate('/main-kim');
  };

  const enterToLogin = e => {
    e.key === 'Enter' && handleLogin();
  };

  const isFormValid = email.includes('@') && password.length >= 5;

  return (
    <section className="login-page">
      <div className="Wrapper">
        <h1 className="logo">Westagram</h1>
        <div className="contant">
          <form className="form">
            <label>
              <input
                className="input id"
                type="email"
                name="email"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={formInputChanged}
                onKeyUp={enterToLogin}
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
                onKeyUp={enterToLogin}
                onChange={formInputChanged}
                autoComplete="current-password"
              />
            </label>
          </form>
          <button
            className={`loginBtn ${isFormValid ? '' : 'loginBtn--disable'}`}
            onClick={handleLogin}
            style={{
              disabled: !isFormValid,
            }}
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
