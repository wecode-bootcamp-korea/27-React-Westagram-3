import React from 'react';
import './MainRightHeader.scss';

function MainRightHeader({ title }) {
  return (
    <div className="main-right-header">
      <span className="title">{title}</span>
      <span className="show-all">모두 보기</span>
    </div>
  );
}

export default MainRightHeader;
