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

  function onClickBtn(event) {
    event.preventDefault(); // form 의 submit 이벤트 막기
    fetch('http://10.58.4.232:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: idInput,
        password: pwInput,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          navigate('/main-lee');
          console.log('성공했습니다');
        } else if (result.message === 'USER_DOES_NOT_EXIST') {
          alert('유저가 존재하지 않습니다');
        }
      });
  }
  // if (isValid) {
  //   navigate('/main-lee');
  // }

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
              className="login-btn"
              disabled={isValid ? false : true}
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
