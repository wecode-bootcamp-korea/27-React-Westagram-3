import React, { useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from './Feeds/Feeds';
import MainRight from './MainRight/MainRight';
import './MainKim.scss';

function MainKim() {
  const [currentPopup, setCurrentPopup] = useState('');

  const clickBody = e => {
    !!currentPopup && setCurrentPopup('');
  };

  return (
    <section className="main-page" onClick={e => clickBody(e)}>
      <Nav setCurrentPopup={setCurrentPopup} currentPopup={currentPopup} />
      <main className="main">
        <Feeds />
        <MainRight />
      </main>
    </section>
  );
}

export default MainKim;
