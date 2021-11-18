import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="header">
      <div className="logo">
        <img src="/images/soyeonWon/instagram.png" alt="인스타그램 로고" />
        <span>westagram</span>
      </div>

      <div className="searchBox">
        <input type="text" placeholder="검색" />
        <img src="/images/soyeonWon/search.png" alt="검색아이콘" />
      </div>

      <div className="icon">
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt=""
        />
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt=""
        />
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt=""
        />
      </div>
    </nav>
  );
}

export default Nav;
