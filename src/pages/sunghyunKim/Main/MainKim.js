import React from 'react';
import './MainKim.scss';
import { useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Footer from './Footer/Footer';
import Recommends from './Recommends/Recommends';
import Stories from './Stories/Stories';
import Myprofile from './Myprofile/Myprofile';
import Feeds from './Feeds/Feeds';

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
        <section className="main-right">
          <Myprofile />
          <Stories />
          <Recommends />
          <Footer />
        </section>
      </main>
    </section>
  );
}

export default MainKim;
