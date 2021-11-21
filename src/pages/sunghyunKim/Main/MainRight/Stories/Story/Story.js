import React from 'react';
import './Story.scss';
function Story({ story }) {
  const { img, username, time } = story;
  return (
    <li className="story">
      <img src={`/images/sunghyunKim/${img}`} alt="profile" />
      <div className="story__info">
        <span>{username}</span>
        <span>{time}</span>
      </div>
    </li>
  );
}

export default Story;
