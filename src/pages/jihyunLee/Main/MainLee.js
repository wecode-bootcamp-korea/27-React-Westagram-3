import React, { useState } from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';

function MainLee() {
  const [currentPopup, setCurrentPopup] = useState('');
  const onBodyClick = e => {
    !!currentPopup && setCurrentPopup('');
  };

  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  function onChangeInput(e) {
    setToDo(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (toDo === '') {
      return; // return 을 만나면 종료
    }
    setToDos(currentArray => [...currentArray, toDo]);
    setToDo('');
    // console.log(toDos);   // 왜 처음엔 빈 array가 출력될까?
  }

  return (
    <div className="realMain" onClick={e => onBodyClick(e)}>
      <Nav setCurrentPopup={setCurrentPopup} currentPopup={currentPopup} />
      <div className="main_background">
        <div className="main">
          <div className="feeds">
            <article className="feed_container">
              <div className="feed_top">
                <div className="feed_user">
                  <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                  <p className="feed_user_name">jihyun</p>
                </div>
                <i className="fas fa-ellipsis-h" />
              </div>

              <div className="feed_img">
                <img src="/images/jihyunLee/4.jpg" alt="feed-img" />
              </div>

              <div className="feed_function">
                <div className="feed_function_left">
                  <i className="fas fa-heart" />
                  <i className="far fa-comment" />
                  <i className="far fa-paper-plane" />
                </div>
                <div className="feed_function_right">
                  <i className="far fa-bookmark" />
                </div>
              </div>

              <div className="feed_like">
                <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                <p>
                  <span className="font_bold">atom</span>님 외 10명이 좋아합니다
                </p>
              </div>

              <div className="feed_content">
                <p>
                  <span className="font_bold">agojsgp</span> 고양이 찰칵... 더
                  보기
                </p>
                <ul className="feed_comment_list">
                  <li>
                    <span className="font_bold">dfgj_cgggg</span> 너무 귀엽다...
                    <i className="fas fa-heart" />
                  </li>
                  {toDos.map((item, index) => (
                    <li key={index}>
                      <span className="font_bold">jihyun219 </span>
                      {item}
                      <i className="fas fa-heart" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="feed_comment">
                <form onSubmit={onSubmit}>
                  <input
                    value={toDo}
                    onChange={onChangeInput}
                    type="text"
                    placeholder="댓글 달기... "
                  />
                  <button className="post_comment">게시</button>
                </form>
              </div>
            </article>
          </div>

          <div className="main_right">
            <div className="main_right_profile">
              <img src="/images/jihyunLee/profile.jpg" alt="profile" />
              <p className="profile">
                jihyun219<span className="gray_color">이지현</span>
              </p>
            </div>

            <div className="main_right_story">
              <div className="story_view">
                <div className="story">스토리</div>
                <div className="all">모두 보기</div>
              </div>

              <div className="user_stories">
                <div>
                  <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                  <p className="profile">
                    jihyun219<span className="gray_color">이지현</span>
                  </p>
                </div>
                <div>
                  <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                  <p className="profile">
                    jihyun219<span className="gray_color">이지현</span>
                  </p>
                </div>
                <div>
                  <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                  <p className="profile">
                    jihyun219<span className="gray_color">이지현</span>
                  </p>
                </div>
                <div>
                  <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                  <p className="profile">
                    jihyun219<span className="gray_color">이지현</span>
                  </p>
                </div>
                <div>
                  <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                  <p className="profile">
                    jihyun219<span className="gray_color">이지현</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="main_right_recommend">
              <div className="recommend_for_you">
                <div className="recommend">회원님을 위한 추천</div>
                <div className="all">모두 보기</div>
              </div>

              <div className="user_profiles">
                <div className="user_profile_one">
                  <div>
                    <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                    <p className="profile">
                      jihyun219<span className="gray_color">이지현</span>
                    </p>
                  </div>
                  <p className="follow">팔로우</p>
                </div>
                <div className="user_profile_one">
                  <div>
                    <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                    <p className="profile">
                      jihyun219<span className="gray_color">이지현</span>
                    </p>
                  </div>
                  <p className="follow">팔로우</p>
                </div>
                <div className="user_profile_one">
                  <div>
                    <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                    <p className="profile">
                      jihyun219<span className="gray_color">이지현</span>
                    </p>
                  </div>
                  <p className="follow">팔로우</p>
                </div>
              </div>
            </div>

            <footer className="information">
              westagram 정보 지원 홍보센터 API 채용정보 개인정보 처리방침 약관
              디렉터리 프로필 해시태그 언어
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLee;
