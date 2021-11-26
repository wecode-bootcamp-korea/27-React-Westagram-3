import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import './LoginOh.scss';
function Login() {
  // 로그인 버튼 누르면 /main-oh 페이지로 이동.
  const navigate = useNavigate();
  const goToMain = () => {
    // fetch('RequestURL()', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: inputId,
    //     password: inputPwd,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if ('token' in result) {
    navigate('/main-oh');
    // eslint-disable-next-line
    //     console.log('결과 : ', result);
    //   } else {
    //     alert('WRONG !');
    //   }
    // });
  };

  // Mission 1 : ID와 Pwd input의 값에 변화가 생기면 그 값이 state로 저장.
  const [inputValues, setinputValues] = useState({
    userId: '',
    userPwd: '',
  });

  const handleInputValues = e => {
    const { name, value } = e.target;
    setinputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // inputId와 inputPwd 유효성 검사 조건
  const isValid =
    inputValues.userId.includes('@') && inputValues.userPwd.length >= 5;

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="logoWrapper">
          <div className="logo">Westagram</div>
        </div>
        <div className="input">
          <input
            className="inputValue"
            type="text"
            name="userId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={inputValues.userId}
            onChange={handleInputValues}
          />
          <input
            className="inputValue"
            type="password"
            name="userPwd"
            placeholder="비밀번호"
            value={inputValues.userPwd}
            onChange={handleInputValues}
          />
          <button className="loginBtn" onClick={goToMain} disabled={!isValid}>
            로그인
          </button>
        </div>
        <footer className="forgotPwd">
          <Link className="link" to="/login-oh">
            비밀번호를 잊으셨나요?
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Login;
