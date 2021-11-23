import React from 'react';
import './Stories.scss';
import Story from './Story/Story';

function Stories() {
  const stories = [
    {
      img: 'p1.jpeg',
      username: 'nypl',
      time: '20분 전',
    },
    {
      img: 'p2.jpeg',
      username: 'chistX',
      time: '50분 전',
    },
    {
      img: 'p3.jpeg',
      username: 'ee_me',
      time: '2시간 전',
    },
    {
      img: 'p4.jpeg',
      username: '짹짹',
      time: '12시간 전',
    },
  ];
  return (
    <div className="right-wrapper wrapper">
      <div className="right-header">
        <span className="right-title">스토리</span>
        <span className="showAll">모두 보기</span>
      </div>
      <ul className="stories">
        {stories.map((story, i) => (
          <Story story={story} key={i} />
        ))}
      </ul>
    </div>
  );
}

export default Stories;
