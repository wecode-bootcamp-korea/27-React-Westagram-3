import React from 'react';
import './MainRight.scss';
import Footer from '../Footer/Footer';
import Myprofile from './Myprofile/Myprofile';
import Recommends from './Recommends/Recommends';
import Stories from './Stories/Stories';
import MainRightHeader from './MainRightHeader/MainRightHeader';
import MainRightWrapper from './MainRightWrapper/MainRightWrapper';

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
