import React from 'react';
import { Link } from 'react-router-dom';
import './MainPath.scss';

function MainPath() {
  return (
    <div className="main-path">
      <section>
        <h1>Login</h1>
        <Link className="profile" to="/login-oh">
          <button>오동녘어진이</button>
        </Link>
        <Link className="profile" to="/login-kim">
          <button>김성현</button>
        </Link>
        <Link className="profile" to="/login-won">
          <button>원소연</button>
        </Link>
        <Link className="profile" to="/login-lee">
          <button>이지현</button>
        </Link>
      </section>
      <section>
        <h1>Main</h1>
        <Link className="profile" to="/main-oh">
          <button>오동녘어진이</button>
        </Link>
        <Link className="profile" to="/main-kim">
          <button>김성현</button>
        </Link>
        <Link className="profile" to="/main-won">
          <button>원소연</button>
        </Link>
        <Link className="profile" to="/main-lee">
          <button>이지현</button>
        </Link>
      </section>
    </div>
  );
}

export default MainPath;
