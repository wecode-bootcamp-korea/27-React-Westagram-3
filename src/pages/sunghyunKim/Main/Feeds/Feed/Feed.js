import React, { useRef, useState } from 'react';
import Comment from './Comment/Comment';
import FeedBtn from './FeedBtn/FeedBtn';
import FeedHeader from './FeedHeader/FeedHeader';
import './Feed.scss';

function Feed({ feedInfo }) {
  const currentUser = 'ria';

  const { feedUserInfo, feedImg, whoLiked, feedContent, time } = feedInfo;
  const [comments, setComments] = useState(feedInfo.comments);
  const [commentInput, setCommentInput] = useState('');

  const nextCommnetId = useRef(comments.length + 1);

  const createComment = () => {
    const commentText = commentInput.trim();
    if (!commentText.length) {
      setCommentInput('');
      alert('댓글을 입력해주세요!');
      return;
    }
    setComments([
      ...comments,
      {
        nickName: currentUser,
        commentText: commentText,
        commentId: nextCommnetId.current,
        isLiked: false,
      },
    ]);
    nextCommnetId.current += 1;
    setCommentInput('');
  };

  const commentValueChange = e => {
    setCommentInput(e.target.value);
  };

  const createCommentWhenEnter = e => {
    if (e.key === 'Enter') {
      createComment();
      return;
    }
  };

  const changeHeart = id => {
    setComments(
      comments.map(c =>
        c.commentId === id ? { ...c, isLiked: !c.isLiked } : c
      )
    );
  };

  const deleteComment = id => {
    setComments(comments.filter(c => c.commentId !== id));
  };

  if (feedInfo.length) {
    return;
  }

  return (
    <article className="feed">
      <FeedHeader user={feedUserInfo} />
      <div className="feed__img">
        <img src={`/images/sunghyunKim/${feedImg}`} alt="feed" />
      </div>
      <div className="feed__detail feed__padding">
        <FeedBtn />
        <div className="who-liked">
          <div className="liked-profile">
            <img
              src="/images/sunghyunKim/likedprofile.jpeg"
              alt="liked profile"
            />
            <b>{whoLiked.likedUser}</b>님
          </div>
          <b>&nbsp;외 {whoLiked.howManyLiked}명</b>이 좋아합니다
        </div>
        <p className="feed__description">
          <b>{feedUserInfo.name}</b>
          {feedContent}
          <span className="more-detail">더보기</span>
        </p>
      </div>
      <div className="feed__comments feed__padding">
        {comments.map(comment => (
          <Comment
            onHeartClick={changeHeart}
            onDeleteComment={deleteComment}
            comment={comment}
            key={comment.commentId}
          />
        ))}
      </div>
      <div className="time feed__padding">{time} 전</div>
      <div className="feed__input feed__padding">
        <input
          id="commentInput"
          type="text"
          placeholder="댓글 달기..."
          onKeyUp={createCommentWhenEnter}
          onChange={commentValueChange}
          value={commentInput}
        />
        <button
          id="addCommentBtn"
          className={`main-btn ${!!commentInput ? '' : 'main-btn--disable'}`}
          onClick={createComment}
          style={{ disabled: !!commentInput ? 'false' : 'true' }}
        >
          게시
        </button>
      </div>
    </article>
  );
}

export default Feed;
