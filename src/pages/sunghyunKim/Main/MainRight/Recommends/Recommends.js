import React from 'react';
import Recommend from './Recommend/Recommend';
import { RECOMMENDS } from '../../../../../data/mainData';
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
