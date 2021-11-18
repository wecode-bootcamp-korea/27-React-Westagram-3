import React from 'react';
import './Main.scss';
import Nav from '../../../components/jihyunLee/Nav/Nav';

function MainLee() {
  return (
    <div className="main_background">
      <Nav />

      <div className="main">
        <div className="feeds">
          <article className="feed-container">
            <div className="feed-top">
              <div className="feed-user">
                <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                <p className="feed-user-name">jihyun</p>
              </div>
              <i className="fas fa-ellipsis-h" />
            </div>

            <div className="feed-img">
              <img src="/images/jihyunLee/4.jpg" alt="feed-img" />
            </div>

            <div className="feed-function">
              <div className="feed-function-left">
                <i className="fas fa-heart" />
                <i className="far fa-comment" />
                <i className="far fa-paper-plane" />
              </div>
              <div className="feed-function-right">
                <i className="far fa-bookmark" />
              </div>
            </div>

            <div className="feed-like">
              <img src="/images/jihyunLee/profile.jpg" alt="profile" />
              <p>
                <span className="font-bold">atom</span>님 외 10명이 좋아합니다
              </p>
            </div>

            <div className="feed-content">
              <p>
                <span className="font-bold">agojsgp</span> 고양이 찰칵... 더
                보기
              </p>
              <ul className="feed-comment-list">
                <li>
                  <span className="font-bold">dfgj_cgggg</span> 너무 귀엽다...
                  <i className="fas fa-heart" />
                </li>
              </ul>
            </div>

            <div className="feed-comment">
              <form>
                <input type="text" placeholder="댓글 달기... " />
                <button className="post-comment">게시</button>
              </form>
            </div>
          </article>
        </div>

        <div className="main-right">
          <div className="main-right-profile">
            <img src="/images/jihyunLee/profile.jpg" alt="profile" />
            <p className="profile">
              jihyun219<span className="gray-color">이지현</span>
            </p>
          </div>

          <div className="main-right-story">
            <div className="story-view">
              <div className="story">스토리</div>
              <div className="all">모두 보기</div>
            </div>

            <div className="user-stories">
              <div>
                <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                <p className="profile">
                  jihyun219<span className="gray-color">이지현</span>
                </p>
              </div>
              <div>
                <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                <p className="profile">
                  jihyun219<span className="gray-color">이지현</span>
                </p>
              </div>
              <div>
                <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                <p className="profile">
                  jihyun219<span className="gray-color">이지현</span>
                </p>
              </div>
              <div>
                <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                <p className="profile">
                  jihyun219<span className="gray-color">이지현</span>
                </p>
              </div>
              <div>
                <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                <p className="profile">
                  jihyun219<span className="gray-color">이지현</span>
                </p>
              </div>
            </div>
          </div>

          <div className="main-right-recommend">
            <div className="recommend-for-you">
              <div className="recommend">회원님을 위한 추천</div>
              <div className="all">모두 보기</div>
            </div>

            <div className="user-profiles">
              <div className="user-profile-one">
                <div>
                  <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                  <p className="profile">
                    jihyun219<span className="gray-color">이지현</span>
                  </p>
                </div>
                <p className="follow">팔로우</p>
              </div>
              <div className="user-profile-one">
                <div>
                  <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                  <p className="profile">
                    jihyun219<span className="gray-color">이지현</span>
                  </p>
                </div>
                <p className="follow">팔로우</p>
              </div>
              <div className="user-profile-one">
                <div>
                  <img src="/images/jihyunLee/profile.jpg" alt="profile" />
                  <p className="profile">
                    jihyun219<span className="gray-color">이지현</span>
                  </p>
                </div>
                <p className="follow">팔로우</p>
              </div>
            </div>
          </div>

          <div className="information">
            westagram 정보 지원 홍보센터 API 채용정보 개인정보 처리방침 약관
            디렉터리 프로필 해시태그 언어
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLee;
