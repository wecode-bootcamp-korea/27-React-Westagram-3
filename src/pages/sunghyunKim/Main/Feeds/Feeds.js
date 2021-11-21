import React from 'react';
import Feed from './Feed/Feed';
import './Feeds.scss';
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
