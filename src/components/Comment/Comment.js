import React from 'react';
import './Comment.scss';

function Comment({ comment }) {
  return (
    <li>
      <span className="fixedName">dnjstd</span>
      <span>{comment}</span>
    </li>
  );
}

export default Comment;
