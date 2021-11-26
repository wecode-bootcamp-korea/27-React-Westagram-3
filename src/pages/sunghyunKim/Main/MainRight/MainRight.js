import React from 'react';
import Footer from '../Footer/Footer';
import Myprofile from './Myprofile/Myprofile';
import MainRightWrapper from './MainRightWrapper/MainRightWrapper';
import MainRightHeader from './MainRightHeader/MainRightHeader';
import Stories from './Stories/Stories';
import Recommends from './Recommends/Recommends';
import './MainRight.scss';

function MainRight() {
  return (
    <section className="main-right">
      <Myprofile />
      <MainRightWrapper>
        <MainRightHeader title="스토리" />
        <Stories />
      </MainRightWrapper>
      <MainRightWrapper>
        <MainRightHeader title="회원님을 위한 추천" />
        <Recommends />
      </MainRightWrapper>
      <Footer />
    </section>
  );
}

export default MainRight;
