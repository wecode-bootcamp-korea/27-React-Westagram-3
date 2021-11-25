import React from 'react';
import Recommend from './Recommend/Recommend';
import './Recommends.scss';

function Recommends() {
  const recommends = [
    { img: 'p5.jpeg', username: 'abd_world', info: 'ee_me님 외 2명이...' },
    { img: 'p6.jpeg', username: 'joyyyyy', info: 'ria님 외 12명이...' },
    { img: 'p7.jpeg', username: 'hwnhwan12', info: 'peakup님 외 2명이...' },
  ];
  return (
    <ul className="recommends">
      {recommends.map((recommend, i) => (
        <Recommend recommend={recommend} key={i} />
      ))}
    </ul>
  );
}

export default Recommends;
