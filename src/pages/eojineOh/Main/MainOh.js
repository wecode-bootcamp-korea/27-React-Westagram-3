import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import Comment from '../../../components/Comment/Comment';
import { STORY_DATA } from './storyData';
import { RECOMMEND_DATA } from './recommendData';
import { RIGHTFOOTER_DATA } from './rightFooterData';
import './MainOh.scss';

function Main() {
  const [commentInput, setCommentInput] = useState(''); // comment input state 생성.
  const [comments, setComments] = useState([]); // feed에 들어갈 comment들 관련 state 생성.

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

  const [currentPopup, setCurrentPopup] = useState('');
  const onBodyClick = e => {
    !!currentPopup && setCurrentPopup('');
  };

  return (
    <div className="main" onClick={e => onBodyClick(e)}>
      <Nav setCurrentPopup={setCurrentPopup} currentPopup={currentPopup} />
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
                  <b>jrong.__</b> 님 외 <b>1500</b> 명이 좋아합니다
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
                {comments.map((commentText, id) => {
                  return (
                    <Comment
                      key={id}
                      userName="wecodebootcamp"
                      commentText={commentText}
                    />
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
                  const { value } = e.target;
                  setCommentInput(value);
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
              {STORY_DATA.map(story => {
                return (
                  <div className="othersProfile" key={story.id}>
                    <img
                      className="image"
                      src={story.profileImage}
                      alt={story.profileID}
                    />
                    <div className="others">
                      <div className="profileId">{story.profileID}</div>
                      <div className="ago">{story.ago}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="recommend">
            <div className="upper">
              <div className="title">회원님을 위한 추천</div>
              <button className="showMore">모두 보기</button>
            </div>
            <div className="othersWrapper">
              {RECOMMEND_DATA.map(recommend => {
                return (
                  <div className="othersProfile" key={recommend.id}>
                    <img
                      className="image"
                      src={recommend.profileImage}
                      alt={recommend.profileId}
                    />
                    <div className="others">
                      <div className="profileId">{recommend.profileId}</div>
                      <div className="ago">회원님을 위한 추천입니다.</div>
                    </div>
                    <button className="followOther">팔로우</button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rightInfo">
            <ul>
              {RIGHTFOOTER_DATA.map(data => {
                return (
                  <li key={data.id}>
                    <Link to="/">{data.content}</Link>
                  </li>
                );
              })}
            </ul>
            <br />© 2021 INSTAGRAM FROM META
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
