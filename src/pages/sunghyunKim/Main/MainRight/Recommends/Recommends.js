import React from 'react';
import { RECOMMENDS } from '../../../../../data/mainData';
import Recommend from './Recommend/Recommend';
import './Recommends.scss';

function Recommends() {
  return (
    <ul className="recommends">
      {RECOMMENDS.map((recommend, i) => (
        <Recommend recommend={recommend} key={i} />
      ))}
    </ul>
  );
}

export default Recommends;
