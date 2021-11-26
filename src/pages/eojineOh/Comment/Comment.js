import React from 'react';
import './Comment.scss';

function Comment({ id, userName, commentText, isLiked, toggleIsLiked }) {
  return (
    <div className="replyChunk">
      <div className="replyItSelf">
        <span className="shownReplyId">{userName}</span>
        <span className="shownReplyText">{commentText}</span>
      </div>
      <img
        className="imgHeartIcon"
        src={`/images/eojineOh/${!isLiked ? 'heart.png' : 'redheart.png'}`}
        onClick={toggleIsLiked}
        alt="Hearticon"
      />
    </div>
  );
}

export default Comment;
