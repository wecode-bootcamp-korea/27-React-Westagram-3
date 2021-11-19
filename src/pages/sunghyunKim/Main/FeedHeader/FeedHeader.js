import React from 'react';

function FeedHeader() {
  return (
    <div className="feed__header feed__padding">
      <div className="feed__profile">
        <img src="/images/sunghyunKim/maria3.jpeg" alt="profile" />
        <div className="feed__profile-info">
          <b>ria</b>
          <span>picnic</span>
        </div>
      </div>
      <i className="fas fa-ellipsis-h" />
    </div>
  );
}

export default FeedHeader;
