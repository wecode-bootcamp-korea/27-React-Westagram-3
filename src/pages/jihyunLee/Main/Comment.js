import React from 'react';

function Comment(props) {
  return (
    <ul className="feed_comment_list">
      <li>
        <span className="font_bold">dfgj_cgggg</span> 너무 귀엽다...
        <i className="fas fa-heart" />
      </li>
      {props.toDos.map((item, index) => (
        <li key={index}>
          <span className="font_bold">jihyun219 </span>
          {item}
          <i className="fas fa-heart" />
        </li>
      ))}
    </ul>
  );
}

export default Comment;
