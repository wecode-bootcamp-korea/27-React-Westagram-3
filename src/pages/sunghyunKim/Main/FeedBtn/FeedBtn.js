import React from 'react';

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

export default FeedBtn;
