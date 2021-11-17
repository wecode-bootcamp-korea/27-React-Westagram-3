import React from 'react';
import { useRef, useState } from 'react';
import './Feeds.scss';

function Comment({ onHeartClick, onDeleteComment, comment }) {
  const { nickName, commentText, commentId, heartActive } = comment;
  return (
    <div className="comment" key={commentId}>
      <p className="comment__content">
        <b className="comment__profile">{nickName}</b>
        <span>{commentText}</span>
      </p>
      <div className="comment__btns">
        <i
          className="far fa-trash-alt"
          onClick={() => onDeleteComment(commentId)}
        />
        <i
          className={heartActive ? 'fas fa-heart' : `far fa-heart`}
          onClick={() => onHeartClick(commentId)}
        />
      </div>
    </div>
  );
}
function FeedHeader() {
  return (
    <div className="feed__header feed__padding">
      <div className="feed__profile">
        <img src="/images/sunghyunKim/maria3.jpeg" alt="profile" />
        <div className="feed__profile-info">
          <b>ria</b>
          <span>picnic</span>
        </div>
      </div>
      <i className="fas fa-ellipsis-h" />
    </div>
  );
}
function FeedBtn() {
  return (
    <div className="feed__btns">
      <div className="btns__left">
        <button className="liked heart--liked">
          <i className="fas fa-heart" />
        </button>
        <button>
          <i className="far fa-comment" />
        </button>
        <button>
          <i className="far fa-paper-plane" />
        </button>
      </div>
      <div className="btns__right">
        <button className="save">
          <i className="far fa-bookmark" />
        </button>
      </div>
    </div>
  );
}

function Feed({ userNickName, commentsLength, currentComments }) {
  const [commentValid, setCommentValid] = useState(false);
  const [comments, setComments] = useState(currentComments);
  const [commentInput, setCommentInput] = useState('');

  // // COMMENT Actions
  const nextCommnetId = useRef(commentsLength + 1);

  const onCreateComment = () => {
    const commentText = commentInput.trim();
    if (!commentText.length) {
      alert('댓글을 입력해주세요!');
      return;
    }
    setComments([
      ...comments,
      {
        nickName: userNickName,
        commentText: commentText,
        commentId: nextCommnetId.current,
        heartActive: false,
      },
    ]);
    nextCommnetId.current += 1;
    setCommentInput('');
    setCommentValid(false);
  };

  const onCommentInputChange = e => {
    const commentValue = e.target.value.trim();
    setCommentInput(e.target.value);
    !commentValue ? setCommentValid(false) : setCommentValid(true);
  };

  const onCommentInputKeyup = e => {
    if (e.key === 'Enter') {
      onCreateComment();
      return;
    }
  };

  const onHeartClick = id => {
    setComments(
      comments.map(c =>
        c.commentId === id ? { ...c, heartActive: !c.heartActive } : c
      )
    );
  };

  const onDeleteComment = id => {
    setComments(comments.filter(c => c.commentId !== id));
  };

  return (
    <article className="feed wrapper">
      <FeedHeader />
      <div className="feed__img">
        <img src="/images/sunghyunKim/fly.jpeg" alt="feed" />
      </div>
      <div className="feed__detail feed__padding">
        <FeedBtn />
        <div className="who-liked">
          <div className="liked-profile">
            <img
              src="/images/sunghyunKim/likedprofile.jpeg"
              alt="liked profile"
            />
            <b>ria</b>님
          </div>
          <b>&nbsp;외 10명</b>이 좋아합니다
        </div>
        <p className="feed__description">
          <b>ria</b>오늘도 밤하늘은 이뻐!
          <span className="more-detail">더보기</span>
        </p>
      </div>
      <div className="feed__comments feed__padding">
        {comments.map((comment, i) => (
          <Comment
            onHeartClick={onHeartClick}
            onDeleteComment={onDeleteComment}
            comment={comment}
            key={i}
          />
        ))}
      </div>
      <div className="time feed__padding">33분 전</div>
      <div className="feed__input feed__padding">
        <input
          id="commentInput"
          type="text"
          placeholder="댓글 달기..."
          onKeyUp={onCommentInputKeyup}
          onChange={onCommentInputChange}
          value={commentInput}
        />
        <button
          id="addCommentBtn"
          className={`main-btn ${commentValid ? '' : 'main-btn--disable'}`}
          onClick={onCreateComment}
          style={{ disabled: commentValid ? 'false' : 'true' }}
        >
          게시
        </button>
      </div>
    </article>
  );
}

function Feeds() {
  const feed1Comment = [
    {
      nickName: 'tjdgus05',
      commentText: '이쁘다~~',
      commentId: 1,
      heartActive: true,
    },
  ];
  return (
    <section className="feeds">
      <Feed
        userNickName="ria"
        commentsLength="2"
        currentComments={feed1Comment}
      />
    </section>
  );
}

export default Feeds;
