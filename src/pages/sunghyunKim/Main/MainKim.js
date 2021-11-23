import React from 'react';
import './MainKim.scss';
import { useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from './Feeds/Feeds';
import MainRight from './MainRight/MainRight';

function MainKim() {
  const [currentPopup, setCurrentPopup] = useState('');

  const onBodyClick = e => {
    !!currentPopup && setCurrentPopup('');
  };

  return (
    <section className="main-page" onClick={e => onBodyClick(e)}>
      <Nav setCurrentPopup={setCurrentPopup} currentPopup={currentPopup} />
      <main className="main">
        <Feeds />
        <MainRight />
      </main>
    </section>
  );
}

export default MainKim;
