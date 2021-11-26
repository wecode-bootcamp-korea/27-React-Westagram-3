import React, { useEffect, useState } from 'react';
import Feed from './Feed/Feed';
import './Feeds.scss';

function Feeds() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('data/feedsData.json')
      .then(res => {
        return res.json();
      })
      .then(res => {
        setFeeds(res);
      });
  }, []);

  return (
    <section className="feeds">
      {feeds.map(feed => (
        <Feed key={feed.feedId} feedInfo={feed} />
      ))}
    </section>
  );
}

export default Feeds;
