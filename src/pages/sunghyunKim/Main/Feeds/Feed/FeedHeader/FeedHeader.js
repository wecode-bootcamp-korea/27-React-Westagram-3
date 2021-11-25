import React from 'react';
import './FeedHeader.scss';

function FeedHeader({ user }) {
  const { img, name, nicName } = user;
  return (
    <div className="feed-header">
      <div className="profile">
        <img src={`/images/sunghyunKim/${img}`} alt="profile" />
        <div className="info">
          <b>{name}</b>
          <span>{nicName}</span>
        </div>
      </div>
      <i className="fas fa-ellipsis-h" />
    </div>
  );
}

export default FeedHeader;
