import React from 'react';
import Nav from '../../../components/Nav/Nav';
import './MainOh.scss';

function Main() {
  return (
    <div className="main">
      <Nav />
      <main>
        <div className="feeds">
          <article>
            <div className="feedUpper">
              <div className="imageAndId">
                <img
                  className="profileImage"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="profile_of_ej__oh"
                />
                <div className="profileId">ej__oh</div>
              </div>
              <i className="fas fa-ellipsis-h" />
            </div>
            <div className="feedImage">
              <img
                src="/images/eojineOh/mangorookie.jpeg"
                alt="mangoAndRookie"
              />
            </div>
            <div className="feedInfo">
              <div className="feedIcons">
                <div className="iconsLeft">
                  <img src="/images/eojineOh/heart.png" alt="heart" />
                  <img src="/images/eojineOh/reply.png" alt="reply" />
                  <img src="/images/eojineOh/dmbutton.png" alt="dmbutton" />
                </div>
                <img
                  className="iconsRight"
                  src="/images/eojineOh/save.png"
                  alt="save"
                />
              </div>
              <div className="feedLike">
                <img
                  className="profileImage"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="profile_of_ej__oh"
                />
                <div className="liketext">
                  <span>jrong.__</span> 님 외 <span>1500</span> 명이 좋아합니다
                </div>
              </div>
              <div className="feedText">
                <span className="profileId">ej__oh</span>
                <span className="feedDescription">
                  위워크에서 진행한 베이킹 클래스 ...
                </span>
                <button className="showMoreBtn">더 보기</button>
              </div>
              <div className="reply" /> <div className="hoursAgo">42분 전</div>
            </div>
            <div className="replyAndBtn">
              <input
                className="reply"
                // onKeyUp="enterkey()"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="replyBtn">게시</button>
            </div>
          </article>
        </div>
        <div className="main-right">
          <div className="rightMyProfile">
            <img
              className="image"
              src="/images/eojineOh/profile_of_ej__oh.JPG"
              alt="ej__oh"
            />
            <div className="profileIdAndText">
              <div className="profileId">ej__oh</div>
              <div className="profileText">Hi || Wecoder__27</div>
            </div>
          </div>
          <div className="rightStory">
            <div className="upper">
              <div className="title">스토리</div>
              <button className="showAll">모두 보기</button>
            </div>
            <div className="othersWrapper">
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">15분 전</div>
                </div>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">15분 전</div>
                </div>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">15분 전</div>
                </div>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">15분 전</div>
                </div>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">15분 전</div>
                </div>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">15분 전</div>
                </div>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">15분 전</div>
                </div>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">15분 전</div>
                </div>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">15분 전</div>
                </div>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">15분 전</div>
                </div>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">15분 전</div>
                </div>
              </div>
            </div>
          </div>
          <div className="recommend">
            <div className="upper">
              <div className="title">회원님을 위한 추천</div>
              <button className="showMore">모두 보기</button>
            </div>
            <div className="othersWrapper">
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">회원님을 위한 추천입니다.</div>
                </div>
                <button className="followOther">팔로우</button>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">회원님을 위한 추천입니다.</div>
                </div>
                <button className="followOther">팔로우</button>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">회원님을 위한 추천입니다.</div>
                </div>
                <button className="followOther">팔로우</button>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">회원님을 위한 추천입니다.</div>
                </div>
                <button className="followOther">팔로우</button>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">회원님을 위한 추천입니다.</div>
                </div>
                <button className="followOther">팔로우</button>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">회원님을 위한 추천입니다.</div>
                </div>
                <button className="followOther">팔로우</button>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">회원님을 위한 추천입니다.</div>
                </div>
                <button className="followOther">팔로우</button>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">회원님을 위한 추천입니다.</div>
                </div>
                <button className="followOther">팔로우</button>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">회원님을 위한 추천입니다.</div>
                </div>
                <button className="followOther">팔로우</button>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">회원님을 위한 추천입니다.</div>
                </div>
                <button className="followOther">팔로우</button>
              </div>
              <div className="othersProfile">
                <img
                  className="image"
                  src="/images/eojineOh/profile_of_ej__oh.JPG"
                  alt="ej__oh"
                />
                <div className="others">
                  <div className="profileId">ej__oh</div>
                  <div className="ago">회원님을 위한 추천입니다.</div>
                </div>
                <button className="followOther">팔로우</button>
              </div>
            </div>
          </div>
          <div className="rightInfo">
            소개·도움말·홍보·센터·API·채용 정보·개인정보처리방침·약관·위치·인기
            계정·해시태그·언어
            <br />
            <br />© 2021 INSTAGRAM FROM META
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
