import React from 'react';
import { STORIES } from '../../../../../data/mainData';
import './Stories.scss';
import Story from './Story/Story';

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
