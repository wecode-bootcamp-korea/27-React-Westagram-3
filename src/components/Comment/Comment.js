import React, { useState } from 'react';
import './Comment.scss';

function Comment({ id, userName, commentText }) {
  const [isLiked, setIsLiked] = useState(false); // 댓글에 isLiked 관련 state 생성.

  const toggleIsLiked = () => {
    setIsLiked(!isLiked); // isLiked에 들어간 booelan 값을 계속해서 toggle
  };
  return (
    <div className="replyChunk">
      <div className="replyItSelf">
        <span className="shownReplyId">{userName}</span>
        <span className="shownReplyText">{commentText}</span>
      </div>
      <img
        className="imgHeartIcon"
        src={
          !isLiked
            ? '/images/eojineOh/heart.png'
            : '/images/eojineOh/redheart.png'
        }
        alt="Hearticon"
        onClick={toggleIsLiked}
      />
    </div>
  );
}

export default Comment;
