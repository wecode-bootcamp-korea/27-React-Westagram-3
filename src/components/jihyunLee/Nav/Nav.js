import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav_container">
        <div className="nav_logo">
          <i className="fab fa-instagram" /> | westagram
        </div>
        <div className="nav_search">
          <input type="text" placeholder="검색" />
          <i className="fas fa-search" />
        </div>
        <div className="nav_icon">
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
