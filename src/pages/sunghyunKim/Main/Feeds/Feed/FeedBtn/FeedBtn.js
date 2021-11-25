import React from 'react';
import './FeedBtn.scss';

function FeedBtn() {
  return (
    <div className="feed-btns">
      <div className="btns-left">
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
      <div className="btns-right">
        <button className="save">
          <i className="far fa-bookmark" />
        </button>
      </div>
    </div>
  );
}

export default FeedBtn;
