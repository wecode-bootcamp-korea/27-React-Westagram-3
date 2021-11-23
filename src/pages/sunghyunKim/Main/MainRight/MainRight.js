import React from 'react';
import './MainRight.scss';
import Footer from '../Footer/Footer';
import Myprofile from './Myprofile/Myprofile';
import Recommends from './Recommends/Recommends';
import Stories from './Stories/Stories';

function MainRight() {
  return (
    <section className="main-right">
      <Myprofile />
      <Stories />
      <Recommends />
      <Footer />
    </section>
  );
}

export default MainRight;
