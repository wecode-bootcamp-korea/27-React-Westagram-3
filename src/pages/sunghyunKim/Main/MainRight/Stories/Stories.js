import React from 'react';
import Story from './Story/Story';
import { STORIES } from '../../../../../data/mainData';
import './Stories.scss';

function Stories() {
  return (
    <ul className="stories">
      {STORIES.map((story, i) => (
        <Story story={story} key={i} />
      ))}
    </ul>
  );
}

export default Stories;
