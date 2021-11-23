import React, { useState } from 'react';
import './MainWon.scss';
import Nav from '../../../components/Nav/Nav';

function MainWon() {
  const [댓글, 댓글변경] = useState('');
  const [댓글들, 댓글들변경] = useState([]);

  const [currentPopup, setCurrentPopup] = useState('');
  const onBodyClick = e => {
    !!currentPopup && setCurrentPopup('');
  };

  function putComment() {
    if (댓글) {
      const arr = [...댓글들];
      arr.push(댓글);
      댓글들변경(arr);
      댓글변경('');
    }
  }

  function enterKey() {
    if (window.event.keyCode === 13) {
      putComment();
    }
  }

  return (
    <body className="main" onClick={e => onBodyClick(e)}>
      <Nav setCurrentPopup={setCurrentPopup} currentPopup={currentPopup} />

      <main class="mainWrapper">
        <div className="feeds">
          <article className="article">
            <div className="profileBox">
              <div class="profileImgName">
                <img
                  src="/images/soyeonWon/kk.jpg"
                  alt=""
                  className="profileImg"
                />
                <div className="username">soyeonwon</div>
              </div>
              <img
                src="/images/soyeonWon/option.png"
                alt="옵션"
                class="optionIcon"
              />
            </div>

            <img src="/images/soyeonWon/kk.jpg" alt="" className="feedImage" />
            <section className="feedIcon">
              <div>
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt="좋아요 아이콘"
                />
                <img src="/images/soyeonWon/bubble.png" alt="댓글 아이콘" />
                <img src="/images/soyeonWon/send.png" alt="메세지 아이콘" />
              </div>
              <img src="/images/soyeonWon/save.png" alt="보관 아이콘" />
            </section>
            <section className="feedLike">
              <img
                src="/images/soyeonWon/img01.png"
                alt=""
                className="likeProfileImg"
              />
              <span>wecode_bootcamp</span>
              <span>님&nbsp;</span>
              <span>외 4명</span>
              <span>이 좋아합니다</span>
            </section>
            <section className="contentsBox">
              <span className="username">soyeonwon</span>
              <span className="contentsText">귀요미!!!</span>
            </section>

            <ul className="commentList">
              {댓글들.map(function (글, i) {
                return (
                  <li key={i}>
                    <span className="fixedName">dnjstd</span>
                    <span>{글}</span>
                  </li>
                );
              })}
            </ul>

            <div className="commentTime">54분 전</div>

            <div className="commentBox">
              <input
                className="commentInput"
                type="text"
                placeholder="댓글 달기..."
                onKeyUp={enterKey}
                value={댓글}
                onChange={e => {
                  댓글변경(e.target.value);
                }}
              />

              <button className="commentBtn" onClick={putComment}>
                게시
              </button>
            </div>
          </article>
        </div>
        <div className="mainRight">
          <div className="profileBoxAside">
            <img
              src="/images/soyeonWon/img01.png"
              alt=""
              className="profileBoxAsideImg"
            />
            <div className="profile">
              <div className="username">wecode_bootcamp</div>
              <div className="text">weCode | 위코드</div>
            </div>
          </div>

          <div className="storyBox">
            <div className="mainRightTitle">
              <span>스토리</span>
              <button>모두 보기</button>
            </div>

            <div className="storyContents">
              <div className="profileBoxStory">
                <img
                  src="/images/soyeonWon/img02.jpg"
                  alt=""
                  className="StoryImg"
                />
                <div>
                  <div className="username">wecode_bootcamp</div>
                  <div className="text">16분 전</div>
                </div>
              </div>

              <div className="profileBoxStory">
                <img
                  src="/images/soyeonWon/img03.jpg"
                  alt=""
                  className="StoryImg"
                />
                <div>
                  <div className="username">wecode_bootcamp</div>
                  <div className="text">3시간 전</div>
                </div>
              </div>

              <div className="profileBoxStory">
                <img
                  src="/images/soyeonWon/img04.jpg"
                  alt=""
                  className="StoryImg"
                />
                <div>
                  <div className="username">wecode_bootcamp</div>
                  <div className="text">20시간 전</div>
                </div>
              </div>
            </div>
          </div>

          <div className="recommendBox">
            <div className="mainRightTitle">
              <span>회원님을 위한 추천</span>
              <button>모두 보기</button>
            </div>

            <div className="profileBoxRecommend">
              <img
                src="/images/soyeonWon/img05.jpg"
                alt=""
                className="profileBoxRecoImg"
              />
              <div>
                <div className="username">wecode_bootcamp</div>
                <div className="text">wecode님 외 12명이 팔로우 ...</div>
              </div>
              <button>팔로우</button>
            </div>

            <div className="profileBoxRecommend">
              <img
                src="/images/soyeonWon/img06.jpg"
                alt=""
                className="profileBoxRecoImg"
              />
              <div>
                <div className="username">wecode_bootcamp</div>
                <div className="text">wecode_bootcamp님 외 4 ...</div>
              </div>
              <button>팔로우</button>
            </div>

            <div className="profileBoxRecommend">
              <img
                src="/images/soyeonWon/img07.jpg"
                alt=""
                className="profileBoxRecoImg"
              />
              <div>
                <div className="username">wecode_bootcamp</div>
                <div className="text">wecode님 외 7명이 팔로우 ...</div>
              </div>
              <button>팔로우</button>
            </div>
          </div>

          <div className="corpArea">
            <ul>
              <li>INSTAGRAM 정보</li>
              <li>지원</li>
              <li>홍보센터</li>
              <li>API</li>
              <li>채용 정보</li>
              <li>개인정보처리방침</li>
              <li>약관</li>
              <li>디렉터리</li>
              <li>프로필</li>
              <li>해시태그</li>
              <li>언어</li>
            </ul>

            <span>© 2021 INSTAGRAM</span>
          </div>
        </div>
      </main>
    </body>
  );
}

export default MainWon;
