import React from 'react';
import './Recommend.scss';

function Recommend({ recommend }) {
  const { img, username, info } = recommend;
  return (
    <li className="recommend">
      <div className="recommend__main">
        <img src={`/images/sunghyunKim/${img}`} alt="profile" />
        <div className="recommend__info">
          <span>{username}</span>
          <span>{info}</span>
        </div>
      </div>
      <button>팔로우</button>
    </li>
  );
}

export default Recommend;
