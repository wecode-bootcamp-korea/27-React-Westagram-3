import React, { useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import './MainOh.scss';

function Main() {
  const [commentInput, setCommentInput] = useState(''); // comment input state 생성.
  const [comments, setComments] = useState([]); // feed에 들어갈 comment들 관련 state 생성.
  const [isLiked, setIsLiked] = useState(false); // 댓글에 isLiked 관련 state 생성.

  function putComment() {
    if (commentInput) {
      // commentInput state가 값이 있으면(truthy이라면)
      const arr = [...comments]; // 임시 배열 arr에 comment들 불러오고
      arr.push(commentInput); // commentInput에 들어간 값을 arr 배열 안에 넣고
      setComments(arr); // 변경된 arr 배열을 feed에 들어갈 comments 배열로 변경하고
      setCommentInput(''); // commentInput state를 빈 문자열로 변경.
    }
  }

  function enterkey() {
    if (window.event.keyCode === 13) {
      // 발생한 이벤트의 키코드가 13일 때(인터키일 때)
      putComment(); // putComment 함수 실행
    }
  }

  const toggleIsLiked = () => {
    setIsLiked(!isLiked); // isLiked에 들어간 booelan 값을 계속해서 toggle
  };

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
              <div className="reply">
                {comments.map(commentText => {
                  return (
                    // eslint-disable-next-line
                    <div className="replyChunk">
                      <div className="replyItSelf">
                        <span className="shownReplyId">wecodebootcamp</span>
                        <span className="shownReplyText">{commentText}</span>
                      </div>
                      <img
                        className="imgHeartIcon"
                        src={
                          !isLiked
                            ? '/images/eojineOh/heart.png'
                            : '/images/eojineOh/redheart.png'
                        }
                        alt="Hearticon"
                        onClick={toggleIsLiked}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="hoursAgo">42분 전</div>
            </div>
            <div className="replyAndBtn">
              <input
                className="reply"
                type="text"
                placeholder="댓글 달기..."
                onChange={e => {
                  setCommentInput(e.target.value);
                }}
                value={commentInput}
                onKeyUp={enterkey}
              />
              <button className="replyBtn" onClick={putComment}>
                게시
              </button>
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
