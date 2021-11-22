import React from 'react';

function Comment({ onHeartClick, onDeleteComment, comment }) {
  const { nickName, commentText, commentId, isLiked } = comment;
  return (
    <div className="comment" key={commentId}>
      <p className="comment__content">
        <b className="comment__profile">{nickName}</b>
        <span>{commentText}</span>
      </p>
      <div className="comment__btns">
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
