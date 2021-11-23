import React from 'react';
import './FeedHeader.scss';
function FeedHeader({ user }) {
  const { img, name, nicName } = user;
  return (
    <div className="feed__header feed__padding">
      <div className="feed__profile">
        <img src={`/images/sunghyunKim/${img}`} alt="profile" />
        <div className="feed__profile-info">
          <b>{name}</b>
          <span>{nicName}</span>
        </div>
      </div>
      <i className="fas fa-ellipsis-h" />
    </div>
  );
}

export default FeedHeader;
