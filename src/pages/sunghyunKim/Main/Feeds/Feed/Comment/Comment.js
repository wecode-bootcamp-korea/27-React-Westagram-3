import React from 'react';
import './Comment.scss';

function Comment({ onHeartClick, onDeleteComment, comment }) {
  const { nickName, commentText, commentId, isLiked } = comment;
  return (
    <div className="comment" key={commentId}>
      <p className="content">
        <b className="profile">{nickName}</b>
        <span>{commentText}</span>
      </p>
      <div className="btns">
        <i
          className="far fa-trash-alt"
          onClick={() => onDeleteComment(commentId)}
        />
        <i
          className={isLiked ? 'fas fa-heart' : `far fa-heart`}
          onClick={() => onHeartClick(commentId)}
        />
      </div>
    </div>
  );
}

export default Comment;
