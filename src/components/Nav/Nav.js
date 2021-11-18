import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="navBar">
      <div className="navWrapper">
        <div className="logoAndName">
          <img
            className="logo"
            src="/images/eojineOh/instagram.png"
            alt="instagramLogo"
          />
          <span className="name">Westagram</span>
        </div>
        <input type="text" placeholder="검색" />
        <ul className="icons">
          <li className="navigate">
            <img src="/images/eojineOh/explore.png" alt="explore" />
          </li>
          <li className="likeIssue">
            <img src="/images/eojineOh/heart.png" alt="heart" />
          </li>
          <li className="myInfo">
            <img src="/images/eojineOh/profile.png" alt="profile" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
